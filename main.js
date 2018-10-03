// stopPropagation 阻止冒泡
// 巧用one来节省内存

$(click1).on('click',function(){
    $(popover1).toggle()
    $(document).one('click', function(){
        $(popover1).hide()
    })
})
$(wrapper1).on('click', function(e){
    e.stopPropagation()
})

// setTimeout  等冒泡阶段走完再执行
$(click2).on('click',function(){
    $(popover2).show()
    setTimeout(function(){
        $(document).one('click', function(){
            $(popover2).hide()
        })
    }, 0)
})

