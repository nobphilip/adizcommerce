searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchform.classList.toggle('active');
}

window.onscroll = () =>
{   
    searchform.classList.remove('active');
    if(window.scrollY > 80)
    {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>
{
    if(window.scrollY > 80)
    {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}