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

const selected1 = document.querySelector(".selected1");
const optionsContainer1 = document.querySelector(".options-container1");
const searchBox1 = document.querySelector(".search-box1 input");

const optionsList1 = document.querySelectorAll(".option1");

selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active");

  searchBox1.value = "";
  filterList1("");

  if (optionsContainer1.classList.contains("active")) {
    searchBox1.focus();
  }
});

optionsList1.forEach(o => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active");
  });
});

searchBox1.addEventListener("keyup", function(e) {
  filterList1(e.target.value);
});

const filterList1 = searchTerm1 => {
  searchTerm1 = searchTerm1.toLowerCase();
  optionsList1.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm1) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
var go = document.getElementById("go");
  if (go) {
    go.addEventListener("click", function (e) {
    var a=selected.innerHTML;
    var b=selected1.innerHTML;
    p=document.getElementById("t1");
    q=document.getElementById("t2");
    mt1p1=document.getElementById("mt1p1");
    mt1p2=document.getElementById("mt1p2");
    mt2p1=document.getElementById("mt2p1");
    mt2p2=document.getElementById("mt2p2");
    document.getElementById('m1').style.display='block'
    document.getElementById('m2').style.display='block'
    document.getElementById('d1').style.display='block'
    document.getElementById('d2').style.display='block'
    document.getElementById('d3').style.display='block'
    document.getElementById('d4').style.display='block'
    document.getElementById('d5').style.display='block'
    document.getElementById('d6').style.display='block'
    document.getElementById('batting_img').style.display='block'
    document.getElementById('bowling_img').style.display='block'
    document.getElementById('fielding_img').style.display='block'
    document.getElementById('matchup1').style.display='block'
    document.getElementById('matchup2').style.display='block'
    if (a=='Select Player' || b=='Select Player'){
            document.getElementById('m1').style.display='none'
            document.getElementById('m2').style.display='none'
            document.getElementById('d1').style.display='none'
            document.getElementById('d2').style.display='none'
            document.getElementById('d3').style.display='none'
            document.getElementById('d4').style.display='none'
            document.getElementById('d5').style.display='none'
            document.getElementById('d6').style.display='none'
            document.getElementById('batting_img').style.display='none'
            document.getElementById('bowling_img').style.display='none'
            document.getElementById('fielding_img').style.display='none'
            document.getElementById('matchup1').style.display='none'
            document.getElementById('matchup2').style.display='none'
            alert('Please select both the Players');
            document.getElementById('info').style.display='none';
            p.src=''
            p.classList=[]
            q.src=''
            q.classList=[]
        }
    else if (a==b){
            document.getElementById('m1').style.display='none'
            document.getElementById('m2').style.display='none'
            document.getElementById('d1').style.display='none'
            document.getElementById('d2').style.display='none'
            document.getElementById('d3').style.display='none'
            document.getElementById('d4').style.display='none'
            document.getElementById('d5').style.display='none'
            document.getElementById('d6').style.display='none'
            document.getElementById('matchup1').style.display='none'
            document.getElementById('matchup2').style.display='none'
            document.getElementById('batting_img').style.display='none'
            document.getElementById('bowling_img').style.display='none'
            document.getElementById('fielding_img').style.display='none'
            alert('Please select two different Players');
            document.getElementById('info').style.display='none';
            p.src=''
            p.classList=[]
            q.src=''
            q.classList=[]
        }
    else{
            $.ajax({
            url: '/playervsplayer',
            type: 'POST',
            data: { player1: a,player2:b},
            success: function(response) {
                // Handle the response from Flask
                console.log('Response:', response);
                p.src=response['result1']
                p.classList=[]
                p.classList.add('img1')
                q.src=response['result2']
                q.classList=[]
                q.classList.add('img2')
                mt1p1.src=response['result1']
                mt1p1.classList=[]
                mt1p1.classList.add('mtimg1')
                mt1p2.src=response['result2']
                mt1p2.classList=[]
                mt1p2.classList.add('mtimg2')
                mt2p1.src=response['result2']
                mt2p1.classList=[]
                mt2p1.classList.add('mtimg1')
                mt2p2.src=response['result1']
                mt2p2.classList=[]
                mt2p2.classList.add('mtimg2')
                var d1l1a=document.getElementById('d1l1a')
                var d1l2a=document.getElementById('d1l2a')
                var d1l3a=document.getElementById('d1l3a')
                var d1l4a=document.getElementById('d1l4a')
                var d1l5a=document.getElementById('d1l5a')
                var d1l6a=document.getElementById('d1l6a')
                var d2l1a=document.getElementById('d2l1a')
                var d2l2a=document.getElementById('d2l2a')
                var d2l3a=document.getElementById('d2l3a')
                var d2l4a=document.getElementById('d2l4a')
                var d2l5a=document.getElementById('d2l5a')
                var d2l6a=document.getElementById('d2l6a')
                var d3l1a=document.getElementById('d3l1a')
                var d3l2a=document.getElementById('d3l2a')
                var d3l3a=document.getElementById('d3l3a')
                var d3l4a=document.getElementById('d3l4a')
                var d4l1a=document.getElementById('d4l1a')
                var d4l2a=document.getElementById('d4l2a')
                var d4l3a=document.getElementById('d4l3a')
                var d4l4a=document.getElementById('d4l4a')
                var d4l5a=document.getElementById('d4l5a')
                var d4l6a=document.getElementById('d4l6a')
                var d5l1a=document.getElementById('d5l1a')
                var d5l2a=document.getElementById('d5l2a')
                var d5l3a=document.getElementById('d5l3a')
                var d5l4a=document.getElementById('d5l4a')
                var d5l5a=document.getElementById('d5l5a')
                var d5l6a=document.getElementById('d5l6a')
                var d6l1a=document.getElementById('d6l1a')
                var d6l2a=document.getElementById('d6l2a')
                var d6l3a=document.getElementById('d6l3a')
                var d6l4a=document.getElementById('d6l4a')
                var m1l1a=document.getElementById('m1l1a')
                var m1l2a=document.getElementById('m1l2a')
                var m1l3a=document.getElementById('m1l3a')
                var m1l4a=document.getElementById('m1l4a')
                var m1l5a=document.getElementById('m1l5a')
                var m1l6a=document.getElementById('m1l6a')
                var m1l7a=document.getElementById('m1l7a')
                var m2l1a=document.getElementById('m2l1a')
                var m2l2a=document.getElementById('m2l2a')
                var m2l3a=document.getElementById('m2l3a')
                var m2l4a=document.getElementById('m2l4a')
                var m2l5a=document.getElementById('m2l5a')
                var m2l6a=document.getElementById('m2l6a')
                var m2l7a=document.getElementById('m2l7a')
                d1l1a.innerHTML=response['mat_played1']
                d1l2a.innerHTML=response['runs1']
                d1l3a.innerHTML=response['avg1']
                d1l4a.innerHTML=response['sr1']
                d1l5a.innerHTML=response['fours1']
                d1l6a.innerHTML=response['sixes1']
                d2l1a.innerHTML=response['mat_played1']
                d2l2a.innerHTML=response['overs1']
                d2l3a.innerHTML=response['wickets1']
                d2l4a.innerHTML=response['economy1']
                d2l5a.innerHTML=response['srt1']
                d2l6a.innerHTML=response['wicket31']
                d3l1a.innerHTML=response['mat_played1']
                d3l2a.innerHTML=response['runout1']
                d3l3a.innerHTML=response['stumped1']
                d3l4a.innerHTML=response['catch1']
                d4l1a.innerHTML=response['mat_played2']
                d4l2a.innerHTML=response['runs2']
                d4l3a.innerHTML=response['avg2']
                d4l4a.innerHTML=response['sr2']
                d4l5a.innerHTML=response['fours2']
                d4l6a.innerHTML=response['sixes2']
                d5l1a.innerHTML=response['mat_played2']
                d5l2a.innerHTML=response['overs2']
                d5l3a.innerHTML=response['wickets2']
                d5l4a.innerHTML=response['economy2']
                d5l5a.innerHTML=response['srt2']
                d5l6a.innerHTML=response['wicket32']
                d6l1a.innerHTML=response['mat_played2']
                d6l2a.innerHTML=response['runout2']
                d6l3a.innerHTML=response['stumped2']
                d6l4a.innerHTML=response['catch2']
                m1l1a.innerHTML=response['runs_m1']
                m1l2a.innerHTML=response['balls_m1']
                m1l3a.innerHTML=response['sr_m1']
                m1l4a.innerHTML=response['avg_m1']
                m1l5a.innerHTML=response['dismissed_m1']
                m1l6a.innerHTML=response['economy_m1']
                m1l7a.innerHTML=response['balls_per_boundary_m1']
                m2l1a.innerHTML=response['runs_m2']
                m2l2a.innerHTML=response['balls_m2']
                m2l3a.innerHTML=response['sr_m2']
                m2l4a.innerHTML=response['avg_m2']
                m2l5a.innerHTML=response['dismissed_m2']
                m2l6a.innerHTML=response['economy_m2']
                m2l7a.innerHTML=response['balls_per_boundary_m2']
            },

        });
        }

      })
      }
