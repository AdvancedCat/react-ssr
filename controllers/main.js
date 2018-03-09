
function routeDefault(req, res, next){
    res.redirect(302, 'http://www.jd.com')
    return
}

function routeMain(req, res, next){
    res.render('index', { title: 'JD Shop' });
}


module.exports = {
    index: routeDefault,
    main: routeMain
}