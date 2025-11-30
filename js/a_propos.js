        // === Slider Témoignages ===
        let slides = document.querySelectorAll('.testimonial-slide');
        let dots = document.querySelectorAll('.dot');
        let current = 0;
        let autoSlide;

        function showSlide(index) {
            slides[current].classList.remove('active');
            slides[current].classList.add('previous');
            dots[current].classList.remove('active');

            current = index;
            slides[current].classList.add('active');
            dots[current].classList.add('active');

            setTimeout(() => {
                slides.forEach(slide => slide.classList.remove('previous'));
            }, 1000);
        }

        document.getElementById('next').addEventListener('click', () => {
            showSlide((current + 1) % slides.length);
        });

        document.getElementById('prev').addEventListener('click', () => {
            showSlide((current - 1 + slides.length) % slides.length);
        });

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                let index = parseInt(dot.getAttribute('data-index'));
                showSlide(index);
            });
        });

        function startAutoSlide() {
            autoSlide = setInterval(() => {
                showSlide((current + 1) % slides.length);
            }, 3000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlide);
        }

        let slider = document.getElementById('testimonial-slider');
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);

        slides[0].classList.add('active');
        dots[0].classList.add('active');
        startAutoSlide();

        // === Animations au scroll ===
        function revealOnScroll() {
            let cards = document.querySelectorAll('.card');
            let stats = document.querySelectorAll('.stats h3');

            cards.forEach(card => {
                let top = card.getBoundingClientRect().top;
                let windowHeight = window.innerHeight;
                if (top < windowHeight - 50) {
                    card.classList.add('visible');
                }
            });

            stats.forEach(stat => {
                let top = stat.getBoundingClientRect().top;
                let windowHeight = window.innerHeight;
                if (top < windowHeight - 50 && !stat.classList.contains('visible')) {
                    stat.classList.add('visible');
                    animateStat(stat);
                }
            });
        }

        function animateStat(element) {
            let value = parseInt(element.innerText);
            let start = 0;
            let duration = 1500;
            let stepTime = Math.abs(Math.floor(duration / value));
            let counter = setInterval(() => {
                start += 1;
                element.innerText = start;
                if (start >= value) clearInterval(counter);
            }, stepTime);
        }

        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('load', revealOnScroll);