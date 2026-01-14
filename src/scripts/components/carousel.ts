/**
 * Vanilla Carousel - Mobile-first, ultra-lightweight
 * Touch-enabled swipe for Instagram/Meta browsers
 * ~2KB minified (vs 75KB Embla Carousel)
 */

interface CarouselOptions {
  container: HTMLElement;
  slidesPerView?: number;
  gap?: number;
  autoHeight?: boolean;
  loop?: boolean;
}

export class Carousel {
  private container: HTMLElement;
  private track: HTMLElement;
  private slides: HTMLElement[];
  private currentIndex: number = 0;
  private startX: number = 0;
  private currentX: number = 0;
  private isDragging: boolean = false;
  private options: Required<CarouselOptions>;

  constructor(options: CarouselOptions) {
    this.container = options.container;
    this.options = {
      container: options.container,
      slidesPerView: options.slidesPerView || 1,
      gap: options.gap || 16,
      autoHeight: options.autoHeight || false,
      loop: options.loop || false
    };

    this.track = this.container.querySelector('[data-carousel-track]') as HTMLElement;
    this.slides = Array.from(this.track.querySelectorAll('[data-carousel-slide]'));

    this.init();
  }

  private init(): void {
    // Setup styles
    this.track.style.display = 'flex';
    this.track.style.gap = `${this.options.gap}px`;
    this.track.style.transition = 'transform 0.3s ease-out';
    this.track.style.willChange = 'transform';

    // Setup touch events (priority for mobile)
    this.setupTouchEvents();

    // Setup navigation buttons if present
    this.setupNavigation();

    // Initial position
    this.updatePosition();
  }

  private setupTouchEvents(): void {
    // Touch start
    this.track.addEventListener('touchstart', (e) => {
      this.isDragging = true;
      this.startX = e.touches[0].clientX;
      this.track.style.transition = 'none';
    }, { passive: true });

    // Touch move
    this.track.addEventListener('touchmove', (e) => {
      if (!this.isDragging) return;

      this.currentX = e.touches[0].clientX;
      const diff = this.currentX - this.startX;

      // Move track
      const currentTransform = this.getCurrentTransform();
      this.track.style.transform = `translateX(${currentTransform + diff}px)`;
    }, { passive: true });

    // Touch end
    this.track.addEventListener('touchend', () => {
      if (!this.isDragging) return;

      const diff = this.currentX - this.startX;
      const threshold = 50; // 50px swipe to change slide

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.prev();
        } else {
          this.next();
        }
      } else {
        // Return to current position
        this.updatePosition();
      }

      this.isDragging = false;
      this.track.style.transition = 'transform 0.3s ease-out';
    });

    // Mouse events for desktop (optional)
    this.track.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.startX = e.clientX;
      this.track.style.transition = 'none';
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;

      this.currentX = e.clientX;
      const diff = this.currentX - this.startX;

      const currentTransform = this.getCurrentTransform();
      this.track.style.transform = `translateX(${currentTransform + diff}px)`;
    });

    document.addEventListener('mouseup', () => {
      if (!this.isDragging) return;

      const diff = this.currentX - this.startX;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.prev();
        } else {
          this.next();
        }
      } else {
        this.updatePosition();
      }

      this.isDragging = false;
      this.track.style.transition = 'transform 0.3s ease-out';
    });
  }

  private setupNavigation(): void {
    const prevBtn = this.container.querySelector('[data-carousel-prev]') as HTMLButtonElement;
    const nextBtn = this.container.querySelector('[data-carousel-next]') as HTMLButtonElement;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.prev());
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.next());
    }
  }

  private getCurrentTransform(): number {
    const transform = window.getComputedStyle(this.track).transform;
    if (transform === 'none') return 0;

    const matrix = transform.match(/matrix\(([^)]+)\)/);
    if (!matrix) return 0;

    return parseFloat(matrix[1].split(',')[4]) || 0;
  }

  private updatePosition(): void {
    const slideWidth = this.slides[0]?.offsetWidth || 0;
    const offset = -(this.currentIndex * (slideWidth + this.options.gap));

    this.track.style.transform = `translateX(${offset}px)`;

    // Emit custom event when slide changes
    const currentSlide = this.slides[this.currentIndex];
    if (currentSlide) {
      const event = new CustomEvent('carousel:change', {
        detail: {
          index: this.currentIndex,
          slide: currentSlide
        },
        bubbles: true
      });
      this.container.dispatchEvent(event);
    }
  }

  public next(): void {
    const maxIndex = this.slides.length - this.options.slidesPerView;

    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else if (this.options.loop) {
      this.currentIndex = 0;
    }

    this.updatePosition();
  }

  public prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else if (this.options.loop) {
      this.currentIndex = this.slides.length - this.options.slidesPerView;
    }

    this.updatePosition();
  }

  public goTo(index: number): void {
    const maxIndex = this.slides.length - this.options.slidesPerView;
    this.currentIndex = Math.max(0, Math.min(index, maxIndex));
    this.updatePosition();
  }
}

// Auto-init carousels on DOM ready
export function initCarousels(): void {
  const carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach(container => {
    new Carousel({
      container: container as HTMLElement,
      slidesPerView: parseInt(container.getAttribute('data-slides') || '1'),
      gap: parseInt(container.getAttribute('data-gap') || '16'),
      loop: container.hasAttribute('data-loop')
    });
  });
}
