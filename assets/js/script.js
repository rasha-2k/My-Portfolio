/* typing animation */
var typed = new Typed(".typing",{
    strings: ["Software Engineer", "QA Tester", "UI/UX designer", "Backend Developer", "Problem Solver"],
    typeSpeed: 100,
    BackSpeed:60,
    loop:true
})
/*Aside*/
const nav = document.querySelector('.nav'),
    navlist = nav.querySelectorAll('li'),
    totalNavList = navlist.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
    for(let i=0 ; i<totalNavList ; i++)
    {
        const a = navlist[i].querySelector('a');
        a.addEventListener('click', function()
        {
            removeBackSection();
            for(let j = 0 ; j < totalNavList ; j++)
            {
                if(navlist[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                }
                navlist[j].querySelector('a').classList.remove('active');
            }
            this.classList.add('active')
            showSection(this);
            if(window.innerWidth <= 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0 ; i < totalSection ; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0 ; i<totalSection ; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i = 0 ; i<totalNavList;i++)
        {
            navlist[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navlist[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i = 0 ; i < totalSection ; i++)
        {
            allSection[i].classList.toggle("open");
        }
    }
    // Add click event listener to the logo
    document.querySelector('.logo a').addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute("href").split("#")[1];
        showSection(this);
        updateNav(this);
        removeBackSection(); 
    });
/*about tabs*/
    document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and contents
        document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked tab
        tab.classList.add('active');

        // Show the corresponding content
        const target = tab.getAttribute('data-target');
        document.querySelector(target).classList.add('active');
    });
});

