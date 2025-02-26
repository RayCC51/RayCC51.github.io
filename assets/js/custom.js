const toc = document.getElementById("table-of-contents");

if(toc){

const summary = document.querySelector('#table-of-contents > summary');
const headings = document.querySelectorAll('h2, h3');
const tocUl = document.querySelector("#table-of-contents > ul");

let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    // Table of contents, change summary defends on scroll position
    let current = '';

    headings.forEach(heading => {
        const headingTop = heading.getBoundingClientRect().top + window.scrollY;
        const headingHeight = heading.clientHeight;

        if (window.scrollY >= headingTop - headingHeight / 2 - 150) {
            current = heading.textContent;
        }
    });

    summary.textContent = current || 'Table of contents';

    // Table of contents, give height limit when sticky
    if(tocUl.getBoundingClientRect().top < 90){
        tocUl.setAttribute("is-sticky", "true");
    }
    else{
        tocUl.removeAttribute("is-sticky");
    }
});
}