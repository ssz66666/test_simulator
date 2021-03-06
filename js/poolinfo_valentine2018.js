//0:4serv,1:3serv,2:4craft,3:3craft
var pickUpServ5 = ["199"];

var serv5 = ["002", "008", "059", "060", "062", "065", "075", "076", "097", "099", "113", "119", "144", "169", "189"];

var pickUpServ4 = [];

var serv4 = ["014", "018", "029", "030", "041", "046", "047", "058", "066", "074", "082", "100", "116", "120", "146", "165", "170", "171", "183", "184", "185", "192", "193"];

var pickUpServ3 = [];

var serv3 = ["015", "023", "026", "027", "031", "042", "056", "110", "124"];


var pickUpCft5 = ["713"];

var craft5 = ["031", "032", "033", "034", "035", "040", "048", "057", "058", "067", "075", "097", "175", "185", "188", "263", "400"];

var pickUpCft4 = ["714"];

var craft4 = ["021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "038", "039", "047", "056", "066", "073", "074", "098", "176", "182", "183", "184", "186", "264", "401"];

var pickUpCft3 = ["715"];

var craft3 = ["090", "091", "092", "093", "094", "095", "096", "243", "244", "245", "246", "247", "265", "331", "332", "333", "402", "418", "419", "420", "545", "580", "581", "582", "585"];



var pool = new DrawPool();
var svtPool = new DrawPool();
var goldPool = new DrawPool();

pool.gaussianStdev = 1/3;
svtPool.gaussianStdev = 1/3;
goldPool.gaussianStdev = 1/3;

// remove this line if not using the default pick-up rates
setDefaultUpRates({ "pickUpServ5" : pickUpServ5,
                      "pickUpServ4" : pickUpServ4,
                      "pickUpServ3" : pickUpServ3,
                      "pickUpCft5" : pickUpCft5,
                      "pickUpCft4" : pickUpCft4,
                      "pickUpCft3" : pickUpCft3 });

resetUpRate();
resetDropRate();
// populate pools
resetPools();
