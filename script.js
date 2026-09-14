function sendOrder(e){
e.preventDefault();
const msg="Creative Cardboard Order\nName: "+document.getElementById("customerName").value+
"\nProduct: "+document.getElementById("product").value+
"\nQuantity: "+document.getElementById("qty").value+
"\nDetails: "+(document.getElementById("details").value||"None");
location.href="https://wa.me/918310771159?text="+encodeURIComponent(msg);
}

function showProductInfo(b){
const n=b.dataset.name,p=b.dataset.price;
document.getElementById("infoName").textContent=n;
document.getElementById("infoPrice").textContent=p;
const d={
"Customized Pen":"Personalized handmade stationery. Customization can include colours, names and printing.",
"Mini Notebook":"A handmade mini notebook for notes, ideas, schoolwork and trips.",
"Mini Binder":"A compact handmade binder designed for cards and small collections.",
"Bookmark":"A simple handmade bookmark for keeping your place in a book.",
"Football Cards":"Handmade football collectibles made for collecting and enjoying different player sets.",
"Paper Katana":"A paper-only decorative display craft.",
"Paper Dagger":"A paper-only decorative display craft.",
"Paper Kunai":"A paper-only decorative display craft.",
"Paper Knife":"A paper-only decorative display craft.",
"Dakchi":"A handmade Creative Cardboard & Paper craft product.",
"Weaponry Handmade Cards — Blast Set":"The Blast Set is the first set of our handmade card game. It is a handmade collectible game-card set featuring fictional grenade-themed and bomb-themed cards.",
};
document.getElementById("infoDescription").textContent=d[n]||"A handmade Creative Cardboard & Paper product.";
document.getElementById("infoRules").innerHTML=n==="Weaponry Handmade Cards — Blast Set"?
"<ul><li>You need at least <strong>5 cards</strong> to play the game.</li><li>The rulebook costs <strong>₹2</strong> when bought separately.</li><li>The rulebook is <strong>FREE with every pack</strong>.</li></ul>":"";
document.getElementById("productInfoModal").style.display="flex";
}
function closeProductInfo(){document.getElementById("productInfoModal").style.display="none";}

(() => {
  const colors=["#090b0e","#101827","#17251c","#211a2b","#2a2115"];
  function updateBackground(){
    const max=document.documentElement.scrollHeight-window.innerHeight;
    const progress=max>0 ? window.scrollY/max : 0;
    const index=Math.min(colors.length-1,Math.floor(progress*colors.length));
    document.body.style.backgroundColor=colors[index];
  }
  window.addEventListener("scroll",updateBackground,{passive:true});
  updateBackground();
})();