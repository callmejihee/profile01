
/*
const categories = document.querySelector('.category');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (e) => {
    console.log(e);

    const filter = e.target.dataset.category;
    console.log(filter);

    projects.forEach((project) => {
        console.log(project.dataset.type);

        if(filter === 'all' || filter === project.dataset.type){
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }

        if (filter == null) {
            return;
        }
    });
});
*/

const categories = document.querySelectorAll('.category_button');
const projects = document.querySelectorAll('.project');

categories.forEach((button) => {
    button.addEventListener('click', (e)=> {
        console.log(e);

        const filter = e.target.dataset.category;
        console.log(filter);

        projects.forEach((project) => {
            console.log(project.dataset.type);

            if(filter === 'all' || filter === project.dataset.type){
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
    
            if (filter == null) {
                return;
            }

        })
        const active_button = document.querySelector('.category_selected');
    
        active_button.classList.remove('category_selected')
        e.target.classList.add('category_selected');
        console.log(e.target);
    })
})
