
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


    })
})
