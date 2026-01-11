// Localization Manager - Comprehensive Content Updater

function updateContent(lang) {
    const t = translations[lang];
    
    // ============== NAVBAR ==============
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navKeys = Object.keys(t.nav);
    navLinks.forEach((link, index) => {
        if (navKeys[index] && !link.parentElement.querySelector('.language-toggle') && !link.parentElement.querySelector('.dark-mode-toggle')) {
            link.textContent = t.nav[navKeys[index]];
        }
    });
    
    // ============== HERO SECTION ==============
    if (document.querySelector('.hero-tag')) {
        document.querySelector('.hero-tag').textContent = t.hero.welcome;
    }
    if (document.querySelector('.hero-title')) {
        const name = lang === 'ar' ? 'أحمد عبد الواحد' : 'Ahmed Abdelwahed';
        const prefix = lang === 'ar' ? 'أنا' : "I'm";
        document.querySelector('.hero-title').innerHTML = `${prefix} <span class="highlight">${name}</span>`;
    }
    if (document.querySelector('.hero-subtitle .typing-text')) {
        document.querySelector('.hero-subtitle .typing-text').textContent = t.hero.subtitle;
    }
    if (document.querySelector('.hero-description')) {
        document.querySelector('.hero-description').textContent = t.hero.description;
    }
    
    // Hero stats
    const statItems = document.querySelectorAll('.hero-stats .stat-item');
    if (statItems.length >= 3) {
        statItems[0].querySelector('h3').textContent = t.hero.graduate;
        statItems[0].querySelector('p').textContent = t.hero.graduateLabel;
        statItems[1].querySelector('h3').textContent = t.hero.months;
        statItems[1].querySelector('p').textContent = t.hero.monthsLabel;
        statItems[2].querySelector('h3').textContent = t.hero.leader;
        statItems[2].querySelector('p').textContent = t.hero.leaderLabel;
    }
    
    // Hero buttons
    const heroBtns = document.querySelectorAll('.hero-buttons .btn');
    if (heroBtns.length >= 2) {
        heroBtns[0].innerHTML = `<i class="fas fa-paper-plane ${lang === 'ar' ? 'ms-2' : 'me-2'}"></i>${t.hero.hireMe}`;
        heroBtns[1].innerHTML = `<i class="fas fa-user ${lang === 'ar' ? 'ms-2' : 'me-2'}"></i>${t.hero.aboutMe}`;
    }
    
    // ============== ABOUT SECTION ==============
    if (document.querySelector('#about .section-title h2')) {
        document.querySelector('#about .section-title h2').textContent = t.about.title;
    }
    if (document.querySelector('#about .lead')) {
        document.querySelector('#about .lead').textContent = t.about.description;
    }
    
    // About info lists
    const infoLists = document.querySelectorAll('.info-list li');
    if (infoLists.length >= 6) {
        infoLists[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> <strong>${t.about.locationLabel}</strong> ${t.about.locationValue}`;
        infoLists[1].innerHTML = `<i class="fas fa-envelope"></i> <strong>${t.about.emailLabel}</strong> abdelwahed1092@gmail.com`;
        infoLists[2].innerHTML = `<i class="fas fa-phone"></i> <strong>${t.about.phoneLabel}</strong> +201007460135`;
        infoLists[3].innerHTML = `<i class="fas fa-shield-alt"></i> <strong>${t.about.militaryLabel}</strong> ${t.about.militaryValue}`;
        infoLists[4].innerHTML = `<i class="fas fa-language"></i> <strong>${t.about.arabicLabel}</strong> ${t.about.arabicValue}`;
        infoLists[5].innerHTML = `<i class="fas fa-language"></i> <strong>${t.about.englishLabel}</strong> ${t.about.englishValue}`;
    }
    
    // ============== EDUCATION SECTION ==============
    if (document.querySelector('#education .section-title h2')) {
        document.querySelector('#education .section-title h2').textContent = t.education.title;
    }
    
    const eduTimeline = document.querySelectorAll('#education .timeline-item');
    if (eduTimeline.length >= 2) {
        // First education item
        eduTimeline[0].querySelector('.timeline-date').textContent = t.education.date1;
        eduTimeline[0].querySelector('h4').textContent = t.education.degree;
        eduTimeline[0].querySelector('h5').textContent = t.education.university;
        eduTimeline[0].querySelector('p').innerHTML = `${t.education.faculty}<br><strong>${t.education.gpaLabel}</strong> ${t.education.gpaValue}<br><strong>${t.education.scholarshipLabel}</strong> ${t.education.scholarshipValue}`;
        
        // Second education item
        eduTimeline[1].querySelector('.timeline-date').textContent = t.education.date2;
        eduTimeline[1].querySelector('h4').textContent = t.education.projectTitle;
        eduTimeline[1].querySelector('h5').textContent = t.education.projectGrade;
        eduTimeline[1].querySelector('p').textContent = t.education.projectDescription;
    }
    
    // ============== EXPERIENCE SECTION ==============
    if (document.querySelector('#experience .section-title h2')) {
        document.querySelector('#experience .section-title h2').textContent = t.experience.title;
    }
    
    const expTimeline = document.querySelectorAll('#experience .timeline-item');
    if (expTimeline.length >= 2) {
        // First experience item
        expTimeline[0].querySelector('.timeline-date').textContent = t.experience.date1;
        expTimeline[0].querySelector('h4').textContent = t.experience.itiTitle;
        expTimeline[0].querySelector('h5').textContent = t.experience.itiCompany;
        expTimeline[0].querySelector('p').innerHTML = `${t.experience.itiLine1}<br>${t.experience.itiLine2}<br><strong>${t.experience.itiLine3}</strong><br>${t.experience.itiLine4}`;
        
        // Second experience item
        expTimeline[1].querySelector('.timeline-date').textContent = t.experience.date2;
        expTimeline[1].querySelector('h4').textContent = t.experience.edenTitle;
        expTimeline[1].querySelector('h5').textContent = t.experience.edenCompany;
        expTimeline[1].querySelector('p').textContent = t.experience.edenDescription;
    }
    
    // ============== SKILLS SECTION ==============
    if (document.querySelector('#skills .section-title h2')) {
        document.querySelector('#skills .section-title h2').textContent = t.skills.title;
    }
    
    // Skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    if (skillCards.length >= 5) {
        // Backend
        skillCards[0].querySelector('h4').textContent = t.skills.backendTitle;
        const backendTags = skillCards[0].querySelectorAll('.skill-tag');
        Object.values(t.skills.backend).forEach((skill, i) => {
            if (backendTags[i]) backendTags[i].textContent = skill;
        });
        
        // Frontend
        skillCards[1].querySelector('h4').textContent = t.skills.frontendTitle;
        const frontendTags = skillCards[1].querySelectorAll('.skill-tag');
        Object.values(t.skills.frontend).forEach((skill, i) => {
            if (frontendTags[i]) frontendTags[i].textContent = skill;
        });
        
        // Database
        skillCards[2].querySelector('h4').textContent = t.skills.databaseTitle;
        const databaseTags = skillCards[2].querySelectorAll('.skill-tag');
        Object.values(t.skills.database).forEach((skill, i) => {
            if (databaseTags[i]) databaseTags[i].textContent = skill;
        });
        
        // Tools
        skillCards[3].querySelector('h4').textContent = t.skills.toolsTitle;
        const toolsTags = skillCards[3].querySelectorAll('.skill-tag');
        Object.values(t.skills.tools).forEach((skill, i) => {
            if (toolsTags[i]) toolsTags[i].textContent = skill;
        });
        
        // Methodologies
        skillCards[4].querySelector('h4').textContent = t.skills.methodologiesTitle;
        const methodTags = skillCards[4].querySelectorAll('.skill-tag');
        Object.values(t.skills.methodologies).forEach((skill, i) => {
            if (methodTags[i]) methodTags[i].textContent = skill;
        });
    }
    
    // Interpersonal skills
    const interpersonalTitle = document.querySelector('#skills h3');
    if (interpersonalTitle) {
        interpersonalTitle.textContent = t.skills.interpersonalTitle;
    }
    const interpersonalSkills = document.querySelectorAll('.interpersonal-skill p');
    Object.values(t.skills.interpersonal).forEach((skill, i) => {
        if (interpersonalSkills[i]) interpersonalSkills[i].textContent = skill;
    });
    
    // ============== PROJECTS SECTION ==============
    if (document.querySelector('#projects .section-title h2')) {
        document.querySelector('#projects .section-title h2').textContent = t.projects.title;
    }
    if (document.querySelector('#projects .section-subtitle')) {
        document.querySelector('#projects .section-subtitle').textContent = t.projects.subtitle;
    }
    
    // Project filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length >= 4) {
        filterBtns[0].textContent = t.projects.filterAll;
        filterBtns[1].textContent = t.projects.filterWeb;
        filterBtns[2].textContent = t.projects.filterAI;
        filterBtns[3].textContent = t.projects.filterFullstack;
    }
    
    // Individual projects
    const projects = document.querySelectorAll('.project-item');
    const projectData = [
        t.projects.project1,
        t.projects.project2,
        t.projects.project3,
        t.projects.project4,
        t.projects.project5,
        t.projects.project6
    ];
    
    projects.forEach((project, index) => {
        if (projectData[index]) {
            const data = projectData[index];
            const titleEl = project.querySelector('.project-title');
            const descEl = project.querySelector('.project-description');
            const techTags = project.querySelectorAll('.tech-tag');
            
            if (titleEl) titleEl.textContent = data.title;
            if (descEl) descEl.textContent = data.description;
            
            // Update tech tags
            const techKeys = ['tech1', 'tech2', 'tech3', 'tech4'];
            techKeys.forEach((key, i) => {
                if (techTags[i] && data[key]) {
                    techTags[i].textContent = data[key];
                }
            });
        }
        
        // Update badges
        const badges = project.querySelectorAll('.badge');
        badges.forEach(badge => {
            const text = badge.textContent.trim();
            if (text.includes('AI') || text.includes('ذكاء')) {
                badge.textContent = t.projects.badgeAI;
            } else if (text.includes('Full Stack')) {
                badge.textContent = t.projects.badgeFullStack;
            } else if (text.includes('Web App') || text.includes('تطبيق')) {
                badge.textContent = t.projects.badgeWebApp;
            } else if (text.includes('Frontend') || text.includes('واجهة')) {
                badge.textContent = t.projects.badgeFrontend;
            } else if (text.includes('Backend') || text.includes('خلفية')) {
                badge.textContent = t.projects.badgeBackend;
            }
        });
    });
    
    // ============== ACHIEVEMENTS SECTION ==============
    if (document.querySelector('#achievements .section-title h2')) {
        document.querySelector('#achievements .section-title h2').textContent = t.achievements.title;
    }
    
    // Achievements subsections
    const achievementHeaders = document.querySelectorAll('#achievements h4');
    if (achievementHeaders.length >= 3) {
        achievementHeaders[0].innerHTML = `<i class="fas fa-award"></i> ${t.achievements.honorsTitle}`;
        achievementHeaders[1].innerHTML = `<i class="fas fa-book"></i> ${t.achievements.coursesTitle}`;
        achievementHeaders[2].innerHTML = `<i class="fas fa-handshake"></i> ${t.achievements.activitiesTitle}`;
    }
    
    // Award
    const awardItem = document.querySelector('.achievement-item');
    if (awardItem) {
        const awardTitle = awardItem.querySelector('h5');
        const awardDate = awardItem.querySelector('.achievement-date');
        const awardDesc = awardItem.querySelector('p');
        
        if (awardTitle) awardTitle.textContent = t.achievements.awardTitle;
        if (awardDate) awardDate.textContent = t.achievements.awardDate;
        if (awardDesc) awardDesc.textContent = t.achievements.awardDescription;
    }
    
    // Courses
    const courseCards = document.querySelectorAll('.course-card');
    if (courseCards.length >= 2) {
        const aucTitle = courseCards[0].querySelector('h5');
        const aucLis = courseCards[0].querySelectorAll('li');
        if (aucTitle) aucTitle.textContent = t.achievements.aucTitle;
        if (aucLis[0]) aucLis[0].textContent = t.achievements.aucCourse1;
        if (aucLis[1]) aucLis[1].textContent = t.achievements.aucCourse2;
        if (aucLis[2]) aucLis[2].textContent = t.achievements.aucCourse3;
        
        const donTitle = courseCards[1].querySelector('h5');
        const donLis = courseCards[1].querySelectorAll('li');
        if (donTitle) donTitle.textContent = t.achievements.donBoscoTitle;
        if (donLis[0]) donLis[0].textContent = t.achievements.donBoscoCourse;
    }
    
    // Activities
    const activityCards = document.querySelectorAll('.activity-card');
    if (activityCards.length >= 3) {
        // HULT PRIZE
        activityCards[0].querySelector('h5').textContent = t.achievements.hultTitle;
        activityCards[0].querySelector('p').textContent = t.achievements.hultRole;
        activityCards[0].querySelector('span').textContent = t.achievements.hultDate;
        
        // YLY
        activityCards[1].querySelector('h5').textContent = t.achievements.ylyTitle;
        activityCards[1].querySelector('p').textContent = t.achievements.ylyRole;
        activityCards[1].querySelector('span').textContent = t.achievements.ylyDate;
        
        // Turning Point
        activityCards[2].querySelector('h5').textContent = t.achievements.turningTitle;
        activityCards[2].querySelector('p').textContent = t.achievements.turningRole;
        activityCards[2].querySelector('span').textContent = t.achievements.turningDate;
    }
    
    // ============== CONTACT SECTION ==============
    if (document.querySelector('#contact .section-title h2')) {
        document.querySelector('#contact .section-title h2').textContent = t.contact.title;
    }
    if (document.querySelector('#contact .section-subtitle')) {
        document.querySelector('#contact .section-subtitle').textContent = t.contact.subtitle;
    }
    
    const contactInfoTitle = document.querySelector('.contact-info-wrapper .contact-section-title');
    if (contactInfoTitle) {
        contactInfoTitle.textContent = t.contact.connectTitle;
    }
    
    // Contact details
    const contactTexts = document.querySelectorAll('.contact-text');
    if (contactTexts.length >= 4) {
        const h5s = Array.from(contactTexts).map(ct => ct.querySelector('h5'));
        const ps = Array.from(contactTexts).map(ct => ct.querySelector('p'));
        
        if (h5s[0]) h5s[0].textContent = t.contact.locationTitle;
        if (ps[0]) ps[0].textContent = t.contact.locationValue;
        
        if (h5s[1]) h5s[1].textContent = t.contact.emailTitle;
        if (h5s[2]) h5s[2].textContent = t.contact.phoneTitle;
        if (h5s[3]) h5s[3].textContent = t.contact.availabilityTitle;
        if (ps[3]) ps[3].textContent = t.contact.availabilityValue;
    }
    
    // Social connect
    const socialConnectTitle = document.querySelector('.social-connect h5');
    if (socialConnectTitle) {
        socialConnectTitle.textContent = t.contact.followTitle;
    }
    
    const socialLinks = document.querySelectorAll('.social-link-large span');
    if (socialLinks.length >= 2) {
        socialLinks[0].textContent = t.contact.github;
        socialLinks[1].textContent = t.contact.linkedin;
    }
    
    // Contact form
    const formHeader = document.querySelector('.form-header .contact-section-title');
    if (formHeader) {
        formHeader.textContent = t.contact.formTitle;
    }
    
    // Form labels
    if (document.querySelector('label[for="name"]')) {
        document.querySelector('label[for="name"]').innerHTML = `<i class="fas fa-user ${lang === 'ar' ? 'ms-2' : 'me-2'}"></i>${t.contact.nameLabel} *`;
    }
    if (document.querySelector('label[for="email"]')) {
        document.querySelector('label[for="email"]').innerHTML = `<i class="fas fa-envelope ${lang === 'ar' ? 'ms-2' : 'me-2'}"></i>${t.contact.emailLabel} *`;
    }
    if (document.querySelector('label[for="subject_line"]')) {
        document.querySelector('label[for="subject_line"]').innerHTML = `<i class="fas fa-tag ${lang === 'ar' ? 'ms-2' : 'me-2'}"></i>${t.contact.subjectLabel} *`;
    }
    if (document.querySelector('label[for="message"]')) {
        document.querySelector('label[for="message"]').innerHTML = `<i class="fas fa-comment-dots ${lang === 'ar' ? 'ms-2' : 'me-2'}"></i>${t.contact.messageLabel} *`;
    }
    
    // Form placeholders
    if (document.querySelector('#name')) {
        document.querySelector('#name').placeholder = t.contact.namePlaceholder;
    }
    if (document.querySelector('#email')) {
        document.querySelector('#email').placeholder = t.contact.emailPlaceholder;
    }
    if (document.querySelector('#subject_line')) {
        document.querySelector('#subject_line').placeholder = t.contact.subjectPlaceholder;
    }
    if (document.querySelector('#message')) {
        document.querySelector('#message').placeholder = t.contact.messagePlaceholder;
    }
    
    // Submit button
    const submitBtnText = document.querySelector('.submit-btn .btn-text');
    if (submitBtnText) {
        submitBtnText.innerHTML = `<i class="fas fa-paper-plane ${lang === 'ar' ? 'ms-2' : 'me-2'}"></i>${t.contact.sendButton}`;
    }
    
    // ============== FOOTER ==============
    if (document.querySelector('.footer-description')) {
        document.querySelector('.footer-description').textContent = t.footer.description;
    }
    
    // Footer titles
    const footerTitles = document.querySelectorAll('.footer-title');
    if (footerTitles.length >= 3) {
        footerTitles[0].textContent = t.footer.quickLinksTitle;
        footerTitles[1].textContent = t.footer.servicesTitle;
        footerTitles[2].textContent = t.footer.contactTitle;
    }
    
    // Quick links
    const quickLinks = document.querySelectorAll('.footer-menu a');
    if (quickLinks.length >= 10) {
        const linkTexts = [
            t.footer.home, t.footer.about, t.footer.education, t.footer.experience, t.footer.skills,
            t.footer.webDev, t.footer.backend, t.footer.frontend, t.footer.database, t.footer.uiux
        ];
        quickLinks.forEach((link, i) => {
            if (linkTexts[i]) {
                const icon = link.querySelector('i');
                if (icon) {
                    link.innerHTML = `<i class="${icon.className}"></i> ${linkTexts[i]}`;
                }
            }
        });
    }
    
    // Footer contact info
    const footerContactSpans = document.querySelectorAll('.footer-contact-list span, .footer-contact-list a');
    if (footerContactSpans.length >= 2) {
        // Find the "Available for opportunities" text
        footerContactSpans.forEach(span => {
            if (span.textContent.includes('Available') || span.textContent.includes('متاح')) {
                span.textContent = t.footer.available;
            }
        });
    }
    
    // Copyright
    if (document.querySelector('.footer-copyright')) {
        const name = lang === 'ar' ? 'أحمد عبد الواحد' : 'Ahmed Abdelwahed';
        document.querySelector('.footer-copyright').innerHTML = `&copy; 2026 <strong>${name}</strong>. ${t.footer.copyright}`;
    }
    if (document.querySelector('.footer-credit')) {
        document.querySelector('.footer-credit').innerHTML = `${t.footer.builtWith} <i class="fas fa-heart text-danger"></i> ${t.footer.using}`;
    }
}
