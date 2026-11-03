function genLink(){
 let p = document.getElementById('phone').value.replace(/\D/g,'');
 if(p.startsWith('0')) p = '234'+p.substring(1);
 if(p==''){ alert('Put number'); return; }
 let m = encodeURIComponent(document.getElementById('msg').value);
 let url = `https://wa.me/${p}${m ? '?text='+m : ''}`;
 document.getElementById('link').innerText = url;
 document.getElementById('openWa').href = url;
 document.getElementById('result').style.display='block';
 
 // QR CODE PART - I add am for you
 let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
 document.getElementById('qrImg').src = qrUrl;
 document.getElementById('qrBox').style.display='block';
 document.getElementById('downloadQR').href = qrUrl;
}
function copyLink(){
 navigator.clipboard.writeText(document.getElementById('link').innerText);
 alert('Copied! Share am for your business');
}
