/* ==========================================
           1. داده‌های کامل هوش مصنوعی
           ========================================== */
        

        // --- منطق صفحه اصلی (AI Tools) ---
        const categoryCount = Object.keys(data).length;
const toolCount = Object.values(data).reduce(
    (total, category) => total + Object.keys(category.tools).length,
    0
);

document.getElementById('categoryCount').textContent = categoryCount;
document.getElementById('toolCount').textContent = toolCount;
document.getElementById('currentYear').textContent = new Date().getFullYear();
const container = document.getElementById('categoriesContainer');
        const searchInput = document.getElementById('searchInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        let currentFilter = 'all';

        function renderCategories(filterText = '', categoryFilter = 'all') {
            container.innerHTML = '';
            
            for (const [category, info] of Object.entries(data)) {
                const matchesCategory = category.toLowerCase().includes(filterText.toLowerCase());
                const matchingTools = Object.entries(info.tools).filter(([name, toolData]) => 
                    name.toLowerCase().includes(filterText.toLowerCase()) || 
                    toolData.desc.toLowerCase().includes(filterText.toLowerCase())
                );
                const categoryMatches = categoryFilter === 'all' || info.category === categoryFilter;

                if ((matchesCategory || matchingTools.length > 0 || filterText === '') && categoryMatches) {
                    const card = document.createElement('div');
                    card.className = 'category-card';
                    
                    let toolsHTML = '';
                    const toolsToShow = filterText ? matchingTools : Object.entries(info.tools);
                    
                    toolsToShow.forEach(([name, toolData]) => {
                        toolsHTML += `
                            <a href="${toolData.url}" target="_blank" rel="noopener noreferrer" class="tool-item">
                                <div class="tool-name">${name}</div>
                                <div class="tool-desc">${toolData.desc}</div>
                            </a>
                        `;
                    });

                    card.innerHTML = `
                        <span class="category-icon">${info.icon}</span>
                        <div class="category-title">${category}</div>
                        <div class="tools-list">${toolsHTML}</div>
                        <div class="expand-btn">⬇ نمایش ابزارها ⬇</div>
                    `;

                    // باز و بسته شدن آکاردئون (جلوگیری از تداخل با لینک)
                    card.addEventListener('click', function(e) {
                        if(!e.target.closest('.tool-item')) {
                            this.classList.toggle('active');
                        }
                    });

                    container.appendChild(card);
                }
            }
        }

        // ایونت لیسنرها برای فیلتر و سرچ صفحه اول
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.dataset.filter;
                renderCategories('', currentFilter);
            });
        });
        searchInput.addEventListener('input', (e) => renderCategories(e.target.value, currentFilter));
        
        // اجرای اولیه صفحه اول
        renderCategories();


        /* ==========================================
           2. منطق صفحه پروژه‌های دانشجویی
           ========================================== */
        
        // لیست پروژه‌های پیش‌فرض (فقط همین‌ها نمایش داده می‌شوند)
        

        // چون قابلیت آپلود را حذف کردیم، فقط پروژه‌های دیفالت را نشان می‌دهیم
        const allProjects = defaultProjects;

        function renderProjects(list) {
            const g = document.getElementById("projectGrid");
            g.innerHTML = "";
            list.forEach(p => {
                const c = document.createElement("div");
                c.className = "project-card";
                c.onclick = () => window.open(p.url, "_blank", "noopener,noreferrer");
                c.innerHTML = `
                    <div class="logo-placeholder">🎓</div>
                    <h3>${p.name}</h3>
                    <span class="student-author">دانشجو: <strong>${p.author}</strong></span>
                    <p>${p.desc}</p>
                    <div class="tags">${p.cat.map(t => `<span class="tag">${t}</span>`).join("")}</div>
                `;
                g.appendChild(c);
            });
        }

        // سرچ پروژه‌ها
        document.getElementById("projectSearch").addEventListener("input", e => {
            const t = e.target.value.toLowerCase();
            renderProjects(allProjects.filter(p =>
                p.name.toLowerCase().includes(t) ||
                p.author.toLowerCase().includes(t) ||
                p.desc.toLowerCase().includes(t)
            ));
        });

        // --- توابع تغییر صفحه ---
        function showProjectsPage() {
            document.getElementById('mainPage').style.display = 'none';
            document.getElementById('projectsPage').style.display = 'block';
            window.scrollTo(0, 0);
            renderProjects(allProjects);
        }

        function showMainPage() {
            document.getElementById('projectsPage').style.display = 'none';
            document.getElementById('mainPage').style.display = 'block';
            window.scrollTo(0, 0);
        }



