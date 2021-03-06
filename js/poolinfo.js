//0:4serv,1:3serv,2:4craft,3:3craft
var pickUpServ5 = ["108","037"];
var serv5=["002","008","052","059","060","062","065","075","076","084","085","097"];
var pickUpServ4 = ["109"];
var serv4=["006","010","011","014","018","029","030","041","046","047","048","058","066","074","082","087","089","094","100","101"];
var pickUpServ3 = ["110"];
var serv3=["007","009","013","015","017","020","022","023","026","027","028","031","035","042","049","055","056","063","064","071","072","079","080","081","095","104","105"];

var pickUpCft5=["185","188"];
var craft5=["031","032","033","034","035","040","048","057","058","067","075","097","175"];
var pickUpCft4=["186"];
var craft4=["021","022","023","024","025","026","027","028","029","030","038","039","047","056","066","073","074","098","176","182","183","184"];
var pickUpCft3=["187"];
var craft3=["037","042","046","055","065","072","089","090","091","092","093","094","095","096","177"];

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
