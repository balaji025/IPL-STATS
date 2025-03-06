const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

var go = document.getElementById("go");
  if (go) {
    go.addEventListener("click", function (e) {
    var a=selected.innerHTML;
    var t1=document.getElementById("t1");
    t1.src=`http://127.0.0.1:5000/static/images/ipl_tlogo/${a}.svg`
    var t2=document.getElementById("t2");
    t2.src=`http://127.0.0.1:5000/static/images/ipl_tlogo/${a}.svg`
    t1.classList=[];
    t2.classList=[];
    var inf=document.getElementById('info')
    inf.style.display='block';
    if (a=='Select Team'){
        alert('Select a Team')
        document.getElementById('info').style.display='none';
    }
    else if (a=='Chennai Super Kings'){
        t1.classList.add('csk-1-icon');
        t2.classList.add('csk-1-ficon');

    }
    else if (a=='Gujarat Titans'){
        t1.classList.add('gt-1-icon')
        t2.classList.add('gt-1-ficon')
    }
    else if (a=='Delhi Capitals'){
        t1.classList.add('dc-1-icon')
        t2.classList.add('dc-1-ficon')
    }
    else if (a=='Rajasthan Royals'){
        t1.classList.add('rr-1-icon')
        t2.classList.add('rr-1-ficon')
    }
    else if (a=='Sunrisers Hyderabad'){
        t1.classList.add('srh-1-icon')
        t2.classList.add('srh-1-ficon')
    }
    else if (a=='Mumbai Indians'){
        t1.classList.add('mi-1-icon')
        t2.classList.add('mi-1-ficon')
    }
    else if (a=='Lucknow Super Giants'){
        t1.classList.add('lsg-1-icon')
        t2.classList.add('lsg-1-ficon')
    }
    else if (a=='Royal Challengers Bangalore'){
        t1.classList.add('rcb-1-icon')
        t2.classList.add('rcb-1-ficon')
    }
    else if (a=='Punjab Kings'){
        t1.classList.add('pbks-1-icon')
        t2.classList.add('pbks-1-ficon')
    }
    else if (a=='Kolkata Knight Riders'){
        t1.classList.add('kkr-1-icon')
        t2.classList.add('kkr-1-ficon')
    }

    $.ajax({
    url: '/teamlabel',
    type: 'POST',
    data: { team: a},
    success: function(response) {
        // Handle the response from Flask
        console.log('Response:', response);
        var l1=document.getElementById("l1a")
        newText = response['trophies'].replace(/ /g, "&nbsp;");
        l1.innerHTML = newText;
        var l2=document.getElementById("l2a")
        var l3=document.getElementById("l3a")
        var l4=document.getElementById("l4a")
        var l5=document.getElementById("l5a")
        var l6=document.getElementById("l6a")
        var l7=document.getElementById("l7a")
        var l8=document.getElementById("l8a")
        var l9=document.getElementById("l9a")
        var l10=document.getElementById("l10a")
        var l11=document.getElementById("l11a")
        var l12=document.getElementById("l12a")
        var l13=document.getElementById("l13a")

        l2.innerHTML=response['played']
        l3.innerHTML=response['won']
        l4.innerHTML=response['lost']
        l5.innerHTML=response['nr']
        l6.innerHTML=response['top4']
        l7.innerHTML=response['max_score']
        l8.innerHTML=response['min_score']
        l9.innerHTML=response['hrs']
        l10.innerHTML=response['hwt']
        l11.innerHTML=response['or_cap'].replace(/ /g, "&nbsp;");
        l12.innerHTML=response['pr_cap'].replace(/ /g, "&nbsp;");
        l13.innerHTML=response['captain']
        },
    });
     })
  }

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});
const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
