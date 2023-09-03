const accessKey='jGPbsXmnxHwmBelU-hAWligG6urIQK2OFdtI9Egjs-0';
const searchForm= document.querySelector('form');
const searchInput= document.querySelector('.search-input');
const searchIcon = document.querySelector('.material-icons');
const imageContainer= document.querySelector('.image-container');
const loadMoreBtn= document.querySelector('.loadMoreBtn');


let page=1;

const fetchImages=async (query, pageNo) =>{
    try{
        
    if(pageNo===1){
        imageContainer.innerHTML='';
    }

    
    const url=`https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${accessKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
   // console.log(data);
    
    if(data.results.length > 0){
    
    data.results.forEach(photo =>{
        const imageElement= document.createElement('div');
        imageElement.classList.add('imageDiv');
        imageElement.innerHTML=`<img src="${photo.urls.regular}"/>`;
        
        const overlayElement= document.createElement('div');
        overlayElement.classList.add('overlay');
        
        const overlayText= document.createElement('h3');
        overlayText.innerText=`${photo.alt_description}`;
        
        overlayElement.appendChild(overlayText);
        imageElement.appendChild(overlayElement);
        
        imageContainer.appendChild(imageElement);
    });
    
    if(data.total_pages===pageNo){
        loadMoreBtn.style.display="none";
    }
    else{
        loadMoreBtn.style.display="block";
    }
}
    else{
        imageContainer.innerHTML=`<h2>No image found</h2>`;
         if(loadMoreBtn.style.display==="block")
        loadMoreBtn.style.display="none";
    }}
    catch(error){
         imageContainer.innerHTML=`<h2>failed to fetch images. Please try after sometime.</h2>`;
    }}
        
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputText= searchInput.value.trim();
    if(inputText !==''){
        let page=1;
        fetchImages(inputText, page);
    }
    else{
        imageContainer.innerHTML=`<h2>please enter a search query</h2>`;
        if(loadMoreBtn.style.display==="block")
        loadMoreBtn.style.display="none";
    }
    
});
searchIcon.addEventListener('click', (e) => {
     e.preventDefault();
    const inputText = searchInput.value.trim();
    if (inputText !== '') {
        let page=1;
        fetchImages(inputText, page);
    } else {
        imageContainer.innerHTML = '<h2>Please enter a search query</h2>';
    }
});

loadMoreBtn.addEventListener('click',()=>{
    fetchImages(searchInput.value.trim(),++page);
})
    
