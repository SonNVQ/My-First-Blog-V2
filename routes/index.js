var express = require('express');
var router = express.Router();

var posts = [
  {
    title: 'Home',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut placerat neque. Maecenas et ultrices orci, eu ultricies mauris. Aliquam semper dignissim mi ac consectetur. Ut tincidunt nibh metus, id feugiat odio tincidunt eu. In gravida enim eu nunc interdum fringilla. Donec diam erat, ultrices et semper nec, rutrum vitae neque. Vivamus sed accumsan arcu, vel pellentesque ligula. Nulla mattis urna in dignissim tincidunt. Nulla cursus venenatis vehicula. Curabitur sed iaculis tortor. Proin rhoncus metus a finibus sollicitudin. Vivamus tristique sagittis sem, nec tincidunt orci bibendum vitae. Suspendisse nisi neque, tristique fringilla nunc in, egestas fermentum ligula. \
    Aliquam sit amet tortor orci. Quisque fringilla luctus purus non ultrices. Vestibulum sit amet commodo magna. Fusce dignissim neque justo, in varius urna ornare a. Maecenas a metus tortor. Proin eu leo eget sapien malesuada vulputate. Suspendisse potenti. Aliquam eget tempor arcu. Cras feugiat dapibus dignissim. Pellentesque et pellentesque nibh. Ut vestibulum aliquam lacus, hendrerit porta nulla bibendum faucibus. Cras ac sapien a sem maximus congue sed id ante. Nullam non scelerisque mi. Donec mauris lorem, mollis in ante eget, eleifend efficitur nulla.\
    Donec semper tempor vehicula. Maecenas tristique, enim quis vulputate molestie, lorem neque dapibus enim, faucibus varius risus nulla bibendum ex. Maecenas mattis id nisi eget maximus. Fusce vel ligula magna. Duis auctor semper lacus sit amet auctor. Cras at turpis nulla. Ut porttitor nibh ac urna fringilla sollicitudin vitae eget purus. Cras eget arcu augue. Sed volutpat gravida urna eu molestie. Mauris ut blandit ex, eu ultricies felis. Nullam mattis venenatis lorem, gravida pellentesque neque bibendum id. Maecenas tristique augue lectus, quis blandit odio convallis id. Pellentesque in aliquam massa. Nulla condimentum tortor a leo tempus, a vehicula felis maximus.'
  },
  {
    title:'About me',
    content: 'Fusce vitae rutrum leo. Cras tincidunt ac est id aliquet. Duis sollicitudin orci lacus, nec feugiat neque laoreet at. Vestibulum nec diam ut dui suscipit ornare. In euismod feugiat nunc, vel imperdiet metus. Sed non odio leo. Donec eu orci aliquet, dapibus velit eget, efficitur massa. Quisque in interdum enim, vitae iaculis ex. Donec sagittis mollis erat quis pellentesque. Morbi facilisis tellus sed convallis maximus. In feugiat, justo ac lobortis sollicitudin, orci lacus accumsan lectus, sed vulputate quam orci ac justo. Maecenas sodales bibendum velit lacinia ultrices. In suscipit turpis diam, in ultricies mi volutpat semper. Donec sed molestie est, vel accumsan mi.\
    Vivamus viverra ipsum vel massa sodales, id porttitor mauris tristique. Pellentesque facilisis sem vel enim scelerisque, accumsan venenatis ex hendrerit. Cras vel velit vitae est mattis bibendum auctor nec leo. Mauris id diam non nulla euismod pulvinar in quis justo. In mollis tempus metus eu imperdiet. Ut consequat imperdiet elit a feugiat. Nulla facilisi. Curabitur venenatis, dolor non rhoncus porttitor, tellus nulla facilisis nulla, et dictum nibh purus ut sem. Nulla facilisi. In hac habitasse platea dictumst. Nam ut orci euismod, convallis felis pellentesque, imperdiet nibh. Ut tempus est orci, ut congue nunc iaculis at. Morbi euismod orci vitae congue rhoncus. Ut et ornare neque, vitae rhoncus neque. Aliquam eu lectus vestibulum, volutpat mi id, molestie arcu. Sed nec iaculis sapien.\
    Pellentesque augue odio, efficitur sed lorem in, accumsan congue urna. Pellentesque tellus ante, dignissim vitae orci at, luctus sodales nisl. Quisque auctor dolor sed tristique pharetra. In porta, turpis vel viverra blandit, sem turpis consectetur orci, sed dictum tortor tortor quis tortor. Donec rutrum nisi lorem, non blandit ipsum consectetur et. Praesent eu pharetra ante. Aliquam sed elementum massa, quis aliquam risus. In consectetur sagittis eros ac eleifend. Donec dictum malesuada est at rutrum. Mauris varius finibus augue vitae fringilla. Aliquam id nulla semper, semper augue ut, fermentum eros. Suspendisse non porta quam.'
  },
  {
    title: 'Contact',
    content: 'Curabitur vitae suscipit tellus, ut euismod eros. Donec tristique lacus quis leo ultrices, et molestie ex imperdiet. Nam arcu diam, tincidunt id sem a, tempus tincidunt odio. Maecenas at sollicitudin lectus, in maximus justo. Maecenas feugiat libero quis felis rhoncus malesuada. Integer feugiat porttitor lectus egestas pharetra. Proin sagittis magna tortor, in dignissim lectus porta at. Praesent sit amet aliquam augue. Donec pellentesque venenatis orci, nec efficitur ante semper molestie.\
    Curabitur tristique lorem nec velit semper, id posuere elit tempus. Nunc tincidunt est vitae sem consectetur, sed rutrum neque blandit. Fusce tristique metus scelerisque nunc suscipit, vitae pellentesque enim lacinia. Vestibulum blandit, ex et rutrum euismod, tortor ipsum vehicula tellus, sed porttitor erat tellus non felis. Sed ornare accumsan quam, ut sodales nisi pretium vitae. Aliquam finibus ex eget lacinia blandit. Integer id pellentesque est, in eleifend ipsum. Maecenas semper vehicula bibendum. Aenean efficitur mi consequat mi tincidunt malesuada. Aliquam congue erat nisi, quis faucibus tortor mollis sodales. Mauris ultricies eu tortor vitae tincidunt. Morbi gravida dui at ante blandit, vitae varius est cursus. Nam sagittis, augue in dignissim feugiat, nulla leo commodo arcu, ac convallis orci ligula vitae purus. Vivamus non risus sed quam pellentesque aliquet.\
    Donec lacus est, hendrerit sed sem vehicula, hendrerit laoreet ipsum. Quisque sit amet sollicitudin orci, vitae volutpat turpis. Duis ac ligula sapien. In hac habitasse platea dictumst. Aliquam commodo vestibulum ex vel lacinia. Etiam pretium ornare luctus. Etiam porta metus sed molestie tristique. Morbi feugiat diam non aliquet accumsan. Etiam rutrum velit justo, pretium lobortis lorem congue non. Pellentesque ut diam hendrerit, scelerisque mi quis, gravida ante. Maecenas cursus, nibh vel faucibus tempor, est lorem imperdiet dui, eu malesuada leo ipsum nec tortor. Ut bibendum orci eget justo gravida vehicula. Nulla quis interdum leo. Quisque gravida ipsum eros, vel bibendum tellus venenatis convallis. Etiam non tristique quam. Donec pharetra, augue ut viverra congue, magna ante consequat ligula, nec finibus justo est a lectus.'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'My Blog',
    path: 'home',
    post: posts.find(post => post.title === 'Home')
  });
});

router.get('/about', function(req, res, next) { 
  res.render('about', { 
    title: 'About me',
    path: 'about',
    post: posts.find(post => post.title === 'About me')
  });
})

router.get('/contact', function(req, res, next) { 
  res.render('contact', { 
    title: 'Contact',
    path: 'contact',
    post: posts.find(post => post.title === 'Contact')
  });
})

router.get('/compose', function(req, res, next) { 

})

module.exports = router;
