let offset = $('#head-nav').height();


$('.navbar li a').click(function(event) {
    event.preventDefault();
    window.location.hash = $(this).attr('href')
    const y = $($(this).attr('href'))[0].getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({top: y, behavior: 'smooth'});
})

$(".dropdown-lang li a").click(function(){
    console.log("asdlkfjaslkdf")
    $(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
  });

let en_aboutme1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam asperiores consequatur ab similique quidem. 
Nostrum sequi eius tenetur obcaecati perspiciatis, blanditiis amet asperiores facere repellat eligendi. 
A, necessitatibus distinctio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nulla repudiandae alias, 
dolorum possimus laudantium ullam nobis dicta explicabo tenetur officia ab? Debitis voluptas minima fugit. 
Qui est eos dolorum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus dicta, ratione dolore blanditiis, 
ad deleniti ipsa animi quaerat distinctio corrupti molestias quis ullam aliquam quia est voluptates reprehenderit cumque! 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident vel architecto cupiditate aspernatur quidem accusamus eaque reiciendis 
laudantium ipsam saepe fugiat, temporibus nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam asperiores consequatur ab similique quidem. 
Nostrum sequi eius tenetur obcaecati perspiciatis, blanditiis amet asperiores facere repellat eligendi. 
A, necessitatibus distinctio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nulla repudiandae alias, 
dolorum possimus laudantium ullam nobis dicta explicabo tenetur officia ab? Debitis voluptas minima fugit. 
Qui est eos dolorum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus dicta, ratione dolore blanditiis, 
ad deleniti ipsa animi quaerat distinctio corrupti molestias quis ullam aliquam quia est voluptates reprehenderit cumque! 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident vel architecto cupiditate aspernatur quidem accusamus eaque reiciendis 
laudantium ipsam saepe fugiat, temporibus nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam asperiores consequatur ab similique quidem. 
Nostrum sequi eius tenetur obcaecati perspiciatis, blanditiis amet asperiores facere repellat eligendi. 
A, necessitatibus distinctio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nulla repudiandae alias, 
dolorum possimus laudantium ullam nobis dicta explicabo tenetur officia ab? Debitis voluptas minima fugit. 
Qui est eos dolorum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus dicta, ratione dolore blanditiis, 
ad deleniti ipsa animi quaerat distinctio corrupti molestias quis ullam aliquam quia est voluptates reprehenderit cumque! 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident vel architecto cupiditate aspernatur quidem accusamus eaque reiciendis 
laudantium ipsam saepe fugiat, temporibus nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam asperiores consequatur ab similique quidem. 
Nostrum sequi eius tenetur obcaecati perspiciatis, blanditiis amet asperiores facere repellat eligendi. 
A, necessitatibus distinctio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nulla repudiandae alias, 
dolorum possimus laudantium ullam nobis dicta explicabo tenetur officia ab? Debitis voluptas minima fugit. 
Qui est eos dolorum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus dicta, ratione dolore blanditiis, 
ad deleniti ipsa animi quaerat distinctio corrupti molestias quis ullam aliquam quia est voluptates reprehenderit cumque! 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident vel architecto cupiditate aspernatur quidem accusamus eaque reiciendis 
laudantium ipsam saepe fugiat, temporibus nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam asperiores consequatur ab similique quidem. 
Nostrum sequi eius tenetur obcaecati perspiciatis, blanditiis amet asperiores facere repellat eligendi. 
A, necessitatibus distinctio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nulla repudiandae alias, 
dolorum possimus laudantium ullam nobis dicta explicabo tenetur officia ab? Debitis voluptas minima fugit. 
Qui est eos dolorum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus dicta, ratione dolore blanditiis, 
ad deleniti ipsa animi quaerat distinctio corrupti molestias quis ullam aliquam quia est voluptates reprehenderit cumque! 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident vel architecto cupiditate aspernatur quidem accusamus eaque reiciendis 
laudantium ipsam saepe fugiat, temporibus nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam asperiores consequatur ab similique quidem. 
Nostrum sequi eius tenetur obcaecati perspiciatis, blanditiis amet asperiores facere repellat eligendi. 
A, necessitatibus distinctio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nulla repudiandae alias, 
dolorum possimus laudantium ullam nobis dicta explicabo tenetur officia ab? Debitis voluptas minima fugit. 
Qui est eos dolorum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus dicta, ratione dolore blanditiis, 
ad deleniti ipsa animi quaerat distinctio corrupti molestias quis ullam aliquam quia est voluptates reprehenderit cumque! 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident vel architecto cupiditate aspernatur quidem accusamus eaque reiciendis 
laudantium ipsam saepe fugiat, temporibus nemo?`

let fi_aboutme1 = `adlkfjaöskldfjasöldfölasdjflaösdfölkasjdfölkasdfkasdfaskljdflk
asdjfalsdjföalsdjföklasdf
asdjfölasdjfasd
asjdföäaskldjf
asdlkjföasldf`


$('.navbar li a').click(function(event) {
    event.preventDefault();
    window.location.hash = $(this).attr('href')
    const y = $($(this).attr('href'))[0].getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({top: y, behavior: 'smooth'});
})


document.getElementById("aboutme1").innerHTML = en_aboutme1;

