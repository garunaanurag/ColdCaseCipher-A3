
// For slider 

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// End of Slider


// JSON FILE STARTS 

let galleryItemsData = [
  {
    id: "Gilles",
    title_eng: "Bluebeard - Gilles de Rais",
    disc: "Gilles the Rais, a notorious French nobleman of the 15th century, was infamous for his gruesome acts of sadism and murder, earning him the macabre moniker of \"Bluebeard.\" His dark legacy continues to haunt history as a chilling reminder of human depravity.",
    ctg: "Serial Killer",
    src: "images/gilles.jpg.png"
  },
  {
    id: "Bathory",
    title_eng: "The Blood Countess - Elizabeth Bathory",
    disc: "Uncover the chilling tale of Elizabeth Báthory, the infamous \"Blood Countess\" of 16th-century Hungary. Accused of torturing and murdering young women, her legend endures as one of history's most sinister figures. Explore the enigmatic story of Báthory, a name that still sends shivers down spines centuries later.",
    ctg: "Serial Killer",
    src: "images/elizabeth.jpg"
  },
  {
    id: "Niers",
    title_eng: "Peter Niers",
    disc: "Delve into the chilling saga of Peter Niers, the infamous 16th-century bandit and alleged cannibal who baffled Europe with his gruesome crimes and elusive nature. Uncover the enduring mystery surrounding Niers, a name that still sends shivers down spines across the ages.",
    ctg: "Serial Killer",
    src: "images/peter-niers.jpg"
  },
  {
    id: "Dyer",
    title_eng: "Amelia Dyer",
    disc: "Discover the eerie story of Amelia Dier, a mysterious figure from history known for her unsettling deeds in the 19th century. Dier's enigmatic actions and their lasting impact continue to intrigue and bewilder, making her a name that resonates with intrigue even today. Delve into the mystique surrounding Amelia Dier, a name that lingers as a haunting enigma.",
    ctg: "Serial Killer",
    src: "images/eimilia-dyer.jpg"
  },
  {
    id: "Lopez",
    title_eng: "Pedro Lopez",
    disc: "Delve into the enigmatic story of Pedro Lopez, a figure from the 20th century whose unsettling actions continue to confound and disturb. Uncover the enduring mystery surrounding Pedro Lopez, a name that remains a chilling enigma to this day.",
    ctg: "Serial Killer",
    src: "images/pedro.jpg"
  },
  {
    id: "John",
    title_eng: "Liver-Eating Johnson - John Johnson",
    disc: "Explore the enigmatic story of John Johnson, a figure whose mysterious actions in the 19th century continue to perplex and intrigue. Uncover the enduring mystery surrounding John Johnson, a name that lingers as an enigma even today.",
    ctg: "Serial Killer",
    src: "images/john-johnson.jpg"
  },
  {
    id: "Herman",
    title_eng: "Herman Mudgett",
    disc: "Unearth the eerie tale of Herman Mudgett, a 19th-century figure whose perplexing actions continue to baffle and chill. Dive into the enduring mystery surrounding Herman Mudgett, a name that remains an unsettling enigma to this day.",
    ctg: "Serial Killer",
    src: "images/herman-mudgett.jpg"
  },
  {
    id: "Daniel",
    title_eng: "Daniel Camargo",
    disc: "Explore the cryptic story of Daniel Camargo, a 20th-century figure whose disturbing actions continue to bewilder and haunt. Uncover the enduring mystery surrounding Daniel Camargo, a name that remains an unsettling enigma to this day.",
    ctg: "Serial Killer",
    src: "images/daniel-camargo.png"
  },


];

// let gallery = document.getElementById("gallery");

// let generateGallery = () => {
  
//   return (gallery.innerHTML = galleryItemsData.map((x) => { 
//     let {id,title_eng,disc,ctg,src} = x;
//     return `
 
//             <div class="col">
//                 <img src=${src} alt="">
//                 <div class="col-heading">
//                 <h3>${title_eng}</h3>
//                 </div>
//                 <p>
//                 ${disc}
//                 </p>
//             </div>
//    `
            

            
// })

// .join(""));

// };

// generateGallery();

// END OF GRID JSON
