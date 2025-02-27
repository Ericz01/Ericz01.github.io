document.addEventListener("DOMContentLoaded", function() {
    var slideshow = document.getElementById("slideshow");
    var leftFactBox = document.querySelector('.left-fact-box');
    var rightFactBox = document.querySelector('.right-fact-box');

    var images = [
        "images/style00.png",
        "images/style1.jpg",
        "images/style2.jpg",
        "images/style3.jpg",
        "images/style4.jpg",
        "images/style5.jpg",
        "images/style6.jpg"
    ];

    var facts = [
        "Aloe Vera gel prevents and cures inflammation. Buy Aloe Vera beauty products from our countrywide stores or order online.",
        "Green Tea extract helps reduce acne and excess oil. Buy Green Tea beauty products from our countrywide stores or order online.",
        "Chamomile soothes skin irritations and promotes healing. Buy Chamomile beauty products from our countrywide stores or order online.",
        "Lavender oil has antimicrobial properties that help treat acne. Buy Lavender beauty products from our countrywide stores or order online.",
        "Rosehip oil is rich in vitamins A and C, boosting skin health. Buy Rosehip beauty products from our countrywide stores or order online.",
        "Witch Hazel reduces skin inflammation and tightens pores. Buy Witch Hazel beauty products from our countrywide stores or order online.",
        "Jojoba oil mimics skin’s natural oils, balancing moisture. Buy Jojoba beauty products from our countrywide stores or order online.",
        "Turmeric has anti-inflammatory properties that brighten skin. Buy Turmeric beauty products from our countrywide stores or order online.",
        "Peppermint soothes and refreshes skin with its cooling effect. Buy Peppermint beauty products from our countrywide stores or order online.",
        "Calendula is known for its healing properties and reduces redness. Buy Calendula beauty products from our countrywide stores or order online."
    ];

    var currentIndex = 0;

    // Set initial background image and facts
    slideshow.style.backgroundImage = `url('${images[currentIndex]}')`;
    leftFactBox.innerHTML = facts[currentIndex];
    rightFactBox.innerHTML = facts[(currentIndex + 1) % facts.length];

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        slideshow.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    function changeFacts() {
        leftFactBox.classList.add('fade-out');
        rightFactBox.classList.add('fade-out');
        
        setTimeout(function() {
            var leftFactIndex = (currentIndex * 2) % facts.length;
            var rightFactIndex = (leftFactIndex + 1) % facts.length;

            leftFactBox.innerHTML = facts[leftFactIndex];
            rightFactBox.innerHTML = facts[rightFactIndex];

            leftFactBox.classList.remove('fade-out');
            leftFactBox.classList.add('fade-in');

            rightFactBox.classList.remove('fade-out');
            rightFactBox.classList.add('fade-in');
        }, 1000); // Duration of the fade-out animation
    }

    setInterval(function() {
        changeBackground();
        changeFacts();
    }, 3000);

    // Parallax effect
    window.addEventListener('scroll', function() {
        var offset = window.pageYOffset;
        slideshow.style.backgroundPositionY = offset * 0.5 + "px";
    });

    // Initial fact display
    leftFactBox.classList.add('fade-in');
    rightFactBox.classList.add('fade-in');
});