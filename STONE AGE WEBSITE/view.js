document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Scroll Animation Logic ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

    // --- 2. Diet Calculator Logic ---
    const dietForm = document.getElementById('dietForm');
    const dietResult = document.getElementById('dietResult');

    dietForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const weight = parseFloat(document.getElementById('weight').value);
        const goal = document.getElementById('goal').value;
        let calories = 0;
        let planTitle = "";
        let planDetails = [];

        // Basic BMR Estimate & Goal Logic
        if (goal === 'lose') {
            calories = (weight * 12); 
            planTitle = "SHRED PROTOCOL (Fat Loss)";
            planDetails = [
                `Daily Target: ~${Math.round(calories)} Calories`,
                "Macros: 45% Protein, 35% Fat, 20% Carbs",
                "Meal 1: Egg whites, Spinach, Oats",
                "Meal 2: Chicken Breast, Broccoli",
                "Meal 3: White Fish, Asparagus",
                "Hydration: 4 Liters Water Minimum"
            ];
        } else if (goal === 'gain') {
            calories = (weight * 18);
            planTitle = "GOLIATH PROTOCOL (Bulking)";
            planDetails = [
                `Daily Target: ~${Math.round(calories)} Calories`,
                "Macros: 30% Protein, 20% Fat, 50% Carbs",
                "Meal 1: Whole Eggs, Steak, Rice Cream",
                "Meal 2: Ground Beef, Rice, Avocado",
                "Meal 3: Salmon, Sweet Potato",
                "Post-Workout: Whey Isolate + Dextrose"
            ];
        } else {
            calories = (weight * 15);
            planTitle = "PRIMAL MAINTENANCE";
            planDetails = [
                `Daily Target: ~${Math.round(calories)} Calories`,
                "Macros: 35% Protein, 30% Fat, 35% Carbs",
                "Focus: Whole unprocessed foods",
                "Meal 1: Oatmeal + Whey",
                "Meal 2: Lean Turkey + Rice",
                "Consistency is key."
            ];
        }

        // Generate HTML Output
        let htmlContent = `<h3>${planTitle}</h3><ul>`;
        planDetails.forEach(item => {
            htmlContent += `<li>${item}</li>`;
        });
        htmlContent += `</ul>`;

        dietResult.innerHTML = htmlContent;
        dietResult.style.display = 'block'; // Show result
    });

    // --- 3. Contact Form Animation ---
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const oldText = btn.innerText;
        
        btn.innerText = "TRANSMISSION SENT";
        btn.style.backgroundColor = "var(--neon-green)";
        btn.style.color = "black";
        
        contactForm.reset();
        
        setTimeout(() => {
            btn.innerText = oldText;
            btn.style.backgroundColor = "transparent";
            btn.style.color = "var(--neon-green)";
        }, 3000);
    });

    // --- 4. Smooth Anchor Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});