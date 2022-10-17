// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

var set = new HashSet<int>{1,2,3,4,5};
var set2 = new HashSet<int>{2,3,6,7,8};
var newset = new HashSet<int>();

foreach(int item in set){
    if(set2.Contains(item)){
        Console.WriteLine(item);
    }
}

set.UnionWith(set2);

foreach(int item in set){
    Console.WriteLine(item);
}
