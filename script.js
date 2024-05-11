$(document).ready(function () {
    // Smooth scroll functionality for navigation links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const targetId = $(this).attr('href').substring(1);
        const targetElement = $('#' + targetId);

        if (targetElement.length) {
            const offsetTop = targetElement.offset().top;

            $('html, body').animate({
                scrollTop: offsetTop
            }, 800);
        }
    });

    // Form validation
    $('.contact-form').on('submit', function (e) {
        e.preventDefault();

        if (validateForm()) {
            // Submit form data to backend or perform other actions
            alert('Form submitted successfully!');
            $(this).trigger('reset');
        }
    });

    function validateForm() {
        let isValid = true;

        $('.contact-form input, .contact-form textarea').each(function () {
            const value = $(this).val().trim();
            const name = $(this).attr('name');
            const errorText = $(this).closest('.form-control').find('.error-text');

            if (!value) {
                isValid = false;
                setErrorFor(errorText, name + ' cannot be blank');
            } else {
                setSuccessFor(errorText);
            }

            if (name === 'email' && !isValidEmail(value)) {
                isValid = false;
                setErrorFor(errorText, 'Email is not valid');
            }
        });

        return isValid;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function setErrorFor(errorText, message) {
        errorText.text(message).addClass('error');
    }

    function setSuccessFor(errorText) {
        errorText.text('').removeClass('error');
    }

    // Dynamic typing effect for header
    const typed = new Typed('#element', {
        strings: ['Web developer.', 'Graphic Designer.', 'Digital Creator', 'Programmer', 'Video Editor'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1500,
        showCursor: false
    });

    // Toggle menu button for mobile using jQuery
    $('.menu-btn').on('click', function () {
        $('.nav-links').toggleClass('active');
    });

    // Accordion functionality for sections using jQuery
    $('.accordion-item').on('click', function () {
        $(this).toggleClass('active');
    });

    // Lightbox functionality for projects using jQuery
    $('.project-img').on('click', function () {
        const imagePath = $(this).attr('src');
        $('.lightbox-img').attr('src', imagePath);
        $('.lightbox').addClass('active');
    });

    $('.lightbox-close').on('click', function () {
        $('.lightbox').removeClass('active');
    });

    // Testimonial carousel functionality
    $('.testimonial-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        pauseOnHover: false
    });

    // Modal popup for project details
    $('.project').on('click', function () {
        const projectTitle = $(this).find('h3').text();
        const projectDescription = $(this).find('p').text();

        $('#projectModal .modal-title').text(projectTitle);
        $('#projectModal .modal-body').text(projectDescription);

        $('#projectModal').modal('show');
    });
});
$(document).ready(function () {
    // Smooth scroll functionality for navigation links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const targetId = $(this).attr('href').substring(1);
        const targetElement = $('#' + targetId);

        if (targetElement.length) {
            const offsetTop = targetElement.offset().top;

            $('html, body').animate({
                scrollTop: offsetTop
            }, 800);
        }
    });

    // Form submission
    $('.contact-form').on('submit', function (e) {
        e.preventDefault();

        const form = $(this);
        const formData = form.serialize();

        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: formData,
            success: function (response) {
                const jsonResponse = JSON.parse(response);
                if (jsonResponse.status === 'success') {
                    // Reset the form and display success message
                    form.trigger('reset');
                    $('.form-message').text('Message sent successfully').removeClass('error').addClass('success');
                } else {
                    // Display error message
                    $('.form-message').text('Failed to send message').removeClass('success').addClass('error');
                }
            },
            error: function () {
                // Display error message
                $('.form-message').text('An error occurred').removeClass('success').addClass('error');
            }
        });
    });
});
