function scrollSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:"smooth"});
}
