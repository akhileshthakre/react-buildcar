export const data = {
    "projetcName" : "Build-Car",
    "startDate" :  "Thu Nov 05 2020 11:20:12 GMT+0530 (India Standard Time)",
    "endDate" : "Thu Nov 15 2020 11:20:12 GMT+0530 (India Standard Time)",
    "root" : {
        "task1" : { "name" : "BuildFrame"  , "prevTask" : "" , "nextTask" : "task2" }, 
        "task2" : { "name" : "BuildBody"  , "prevTask" : "task1" , "nextTask" : "task4" },
        "task3" : { "name" : "TestCar"  , "prevTask" : "task4" , "nextTask" : "" },
        "task4" : { "name" : "FitTyre"  , "prevTask" : "task2" , "nextTask" : "task3" }
    }

}

