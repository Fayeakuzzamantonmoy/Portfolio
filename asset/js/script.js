
window.addEventListener("load", function(){
	document.querySelector(".preloader").classList.add("opacity-0");

	setTimeout(function(){
		document.querySelector(".preloader").style.display="none";
	},1000)
})

const filterContainer=document.querySelector(".moment-filter"),
	filterBtns=filterContainer.children,
	totalFilterBtn=filterBtns.length;
	momentItems=document.querySelectorAll(".moment-item"),
	totalMomentItem=momentItems.length;
	console.log(totalMomentItem);

	for(let i=0; i<totalFilterBtn; i++){
		filterBtns[i].addEventListener("click",function(){
			filterContainer.querySelector(".active").classList.remove("active");
			this.classList.add("active");

			const filterValue=this.getAttribute("data-filter");
			for (let k = 0; k < totalMomentItem; k++) {
				if(filterValue === momentItems[k].getAttribute("data-category")){
					momentItems[k].classList.remove("hide");
					momentItems[k].classList.add("show");
				}
				else{
					momentItems[k].classList.remove("show");
					momentItems[k].classList.add("hide");
				}
				if (filterValue === "all") {
					momentItems[k].classList.remove("hide");
					momentItems[k].classList.add("show");
				}
			}
		})
	}

const lightbox= document.querySelector(".lightbox");
	  lightboxImg = lightbox.querySelector(".lightbox-img"),
	  lightboxClose = lightbox.querySelector("lightbox-close"),
	  lightboxText = lightbox.querySelector(".caption-text"),
	  lightboxCounter = lightbox.querySelector(".caption-counter");

	  let itemIndex=0;

	  for (let i = 0; i<totalMomentItem; i++) {
	  	momentItems[i].addEventListener("click",function(){
	  		itemIndex=i;
	  		changeItem();
	  		toggleLightbox();
	  	})
	  }

	  function nextItem(){
	  	if (itemIndex === totalMomentItem-1) {
	  		itemIndex = 0;
	  	}
	  	else{
	  		itemIndex++;
	  	}
	  	changeItem();

	  }

	  function prevItem(){
	  	if (itemIndex === 0 ) {
	  		itemIndex = totalMomentItem-1;
	  	}
	  	else{
	  		itemIndex--;
	  	}
	  	changeItem();

	  }

	  function toggleLightbox(){
	  	lightbox.classList.toggle("open");
	  }

	  function changeItem(){
	  	imgSrc=momentItems[itemIndex].querySelector(".moment-img img").getAttribute("src");
	 	lightboxImg.src = imgSrc;
	 	lightboxText.innerHTML = momentItems[itemIndex].querySelector("h4").innerHTML;
		lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalMomentItem;	
	  }	  

	  lightbox.addEventListener("click",function(event){
	  	if (event.target === lightboxClose || event.target === lightbox) {
	  		toggleLightbox();
	  	}
	  })

	  function hideLightBox(){
	  	toggleLightbox();
	  }

const nav=document.querySelector(".nav"),
	navList=nav.querySelectorAll("li"),
	totalNavList=navList.length;
	allSection=document.querySelectorAll(".section"),
	totalSection=allSection.length;

for(let i=0; i<totalNavList;i++){
	const a=navList[i].querySelector("a");
	a.addEventListener("click",function(){
		
		removeBackSectionClass();

		for(let j=0; j<totalNavList; j++){
			if (navList[j].querySelector("a").classList.contains("active")) {
				
				addBackSectionClass(j)
				//allSection[j].classList.add("back-section");
			}
			navList[j].querySelector("a").classList.remove("active");
		}
		this.classList.add("active");
		showSection(this);

		if(window.innerWidth < 1200){
			asideSectionTogglerBtn();
		}
	})
}

function removeBackSectionClass(){
	for(let i=0; i<totalSection; i++){
		allSection[i].classList.remove("back-section");
	}
}

function addBackSectionClass(num){
	allSection[num].classList.add("back-section");
}

function showSection(element){
	for(let i=0; i<totalSection; i++){
		allSection[i].classList.remove("active");
	}


	const target=element.getAttribute("href").split("#")[1];
   document.querySelector("#"+target).classList.add("active")
}

function updateNav(element){
	for(let i=0; i<totalNavList; i++){
		navList[i].querySelector("a").classList.remove("active");
		const target=element.getAttribute("href").split("#")[1];
		if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
			navList[i].querySelector("a").classList.add("active");
		}
	}

}

document.querySelector(".hire-me").addEventListener("click",function(){
	const sectionIndex=this.getAttribute("data-section-index")
	showSection(this);
	updateNav(this);
	removeBackSectionClass();
	addBackSectionClass(sectionIndex);
})

const navTogglerBtn=document.querySelector(".nav-toggler"),
	aside=document.querySelector(".aside");

navTogglerBtn.addEventListener("click",asideSectionTogglerBtn);

function asideSectionTogglerBtn(){
	aside.classList.toggle("open");
	navTogglerBtn.classList.toggle("open");
	for (let i = 0; i <totalSection; i++) {
		allSection[i].classList.toggle("open");
	}
}
