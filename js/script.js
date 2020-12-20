$('.hide').css('display','none')
$('section').css('display','none')
$('footer').css('display','none')

let a = 0
let b = 0

$('header').click(function () {
    if (a == 0) {
        a = 1;
        $('section').stop().slideDown()
        $('.hide').css('display','block')
        $('.show').css('display','none')
        $('.success').click(function () {  
            if (b == 0) {
                b = 1
                $('footer').stop().slideDown()
            } else if (b == 1) {
                b = 0
                $('footer').stop().slideUp()
            }
        })
    } else if (a == 1) {
        a = 0
        $('section').slideUp()
        $('.hide').css('display','none')
        $('.show').css('display','block')
        $('footer').css('display','none')
    }
})