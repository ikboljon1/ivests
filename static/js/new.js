        // language dropdown toggle on clicking button
        $('.language-btn').on('click', function(event) {
            event.preventDefault();
            $(this).next('.language-dropdown').toggleClass('open');
        });


        