$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MathsPrac.feature");
formatter.feature({
  "line": 2,
  "name": "Mathematics Operations",
  "description": "",
  "id": "mathematics-operations",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 101900,
  "status": "passed"
});
formatter.before({
  "duration": 42900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Addition of two numbers",
  "description": "",
  "id": "mathematics-operations;addition-of-two-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@add"
    },
    {
      "line": 4,
      "name": "@addition"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user has idea of mathematics",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "addition of two numbers is performed",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "output should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.user_has_idea_of_mathematics()"
});
formatter.result({
  "duration": 284672100,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.addition_of_two_numbers_is_performed()"
});
formatter.result({
  "duration": 75400,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.output_should_be_displayed()"
});
formatter.result({
  "duration": 43500,
  "status": "passed"
});
formatter.after({
  "duration": 41100,
  "status": "passed"
});
formatter.before({
  "duration": 43800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Substraction of two numbers",
  "description": "",
  "id": "mathematics-operations;substraction-of-two-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@sub"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user has idea of mathematics",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "subsaraction of \"5\" and \"6\" numbers is performed",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "output should be displayed as \"-1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.user_has_idea_of_mathematics()"
});
formatter.result({
  "duration": 47800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 17
    },
    {
      "val": "6",
      "offset": 25
    }
  ],
  "location": "MathsPracStepDefs.subsaraction_of_and_numbers_is_performed(String,String)"
});
formatter.result({
  "duration": 1725000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 31
    }
  ],
  "location": "MathsPracStepDefs.output_should_be_displayed_as(String)"
});
formatter.result({
  "duration": 870100,
  "status": "passed"
});
formatter.after({
  "duration": 46500,
  "status": "passed"
});
formatter.after({
  "duration": 37100,
  "status": "passed"
});
formatter.before({
  "duration": 37500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Multiplication of two numbers",
  "description": "",
  "id": "mathematics-operations;multiplication-of-two-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@div"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user has idea of mathematics",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "multiplication of \"5\" table is performed",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "output should be displayed as follows",
  "rows": [
    {
      "cells": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "line": 31
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.user_has_idea_of_mathematics()"
});
formatter.result({
  "duration": 215400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "MathsPracStepDefs.multiplication_of_table_is_performed(String)"
});
formatter.result({
  "duration": 108600,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.output_should_be_displayed_as_follows(String\u003e)"
});
formatter.result({
  "duration": 1227300,
  "status": "passed"
});
formatter.after({
  "duration": 41900,
  "status": "passed"
});
formatter.before({
  "duration": 51100,
  "status": "passed"
});
formatter.before({
  "duration": 46600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "add sub mul of two numbers",
  "description": "",
  "id": "mathematics-operations;add-sub-mul-of-two-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@add"
    },
    {
      "line": 34,
      "name": "@sub"
    },
    {
      "line": 34,
      "name": "@div"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user has idea of mathematics",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "add  sub  mul of \"5\" and \"6\"  is performed",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "output should be displayed for all",
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.user_has_idea_of_mathematics()"
});
formatter.result({
  "duration": 150200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    },
    {
      "val": "6",
      "offset": 26
    }
  ],
  "location": "MathsPracStepDefs.add_sub_mul_of_and_is_performed(String,String)"
});
formatter.result({
  "duration": 101100,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.output_should_be_displayed_for_all()"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.after({
  "duration": 48000,
  "status": "passed"
});
formatter.after({
  "duration": 34600,
  "status": "passed"
});
formatter.before({
  "duration": 48900,
  "status": "passed"
});
formatter.before({
  "duration": 30400,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "only add and sub of two numbers",
  "description": "",
  "id": "mathematics-operations;only-add-and-sub-of-two-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@add"
    },
    {
      "line": 41,
      "name": "@sub"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user has idea of mathematics",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "on \"3\" and \"4\" only add and sub is performed",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "for for add and sub output should be displayed only",
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.user_has_idea_of_mathematics()"
});
formatter.result({
  "duration": 74400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 4
    },
    {
      "val": "4",
      "offset": 12
    }
  ],
  "location": "MathsPracStepDefs.on_and_only_add_and_sub_is_performed(String,String)"
});
formatter.result({
  "duration": 130100,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.for_for_add_and_sub_output_should_be_displayed_only()"
});
formatter.result({
  "duration": 84300,
  "status": "passed"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.after({
  "duration": 52500,
  "status": "passed"
});
formatter.before({
  "duration": 38900,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "print all the inputs",
  "description": "",
  "id": "mathematics-operations;print-all-the-inputs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@print"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user has idea of java core",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "user has given set of inputs",
  "rows": [
    {
      "cells": [
        "bdd",
        "cucumber",
        "java",
        "automation",
        "jenkins"
      ],
      "line": 53
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "all the things need to be printed",
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.user_has_idea_of_java_core()"
});
formatter.result({
  "duration": 49100,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.user_has_given_set_of_inputs(String\u003e)"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.all_the_things_need_to_be_printed()"
});
formatter.result({
  "duration": 51800,
  "status": "passed"
});
formatter.after({
  "duration": 28300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 58,
  "name": "key value details mapping",
  "description": "",
  "id": "mathematics-operations;key-value-details-mapping",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@hugedata"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "data is given for key mapping",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "values are given for looping",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "all the \"\u003cloginnames\u003e\" should be printed",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "mathematics-operations;key-value-details-mapping;",
  "rows": [
    {
      "cells": [
        "loginnames"
      ],
      "line": 64,
      "id": "mathematics-operations;key-value-details-mapping;;1"
    },
    {
      "cells": [
        "dheraj"
      ],
      "line": 65,
      "id": "mathematics-operations;key-value-details-mapping;;2"
    },
    {
      "cells": [
        "mahalakshmi"
      ],
      "line": 66,
      "id": "mathematics-operations;key-value-details-mapping;;3"
    },
    {
      "cells": [
        "ravindra"
      ],
      "line": 67,
      "id": "mathematics-operations;key-value-details-mapping;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40100,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "key value details mapping",
  "description": "",
  "id": "mathematics-operations;key-value-details-mapping;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 57,
      "name": "@hugedata"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "data is given for key mapping",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "values are given for looping",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "all the \"dheraj\" should be printed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.data_is_given_for_key_mapping()"
});
formatter.result({
  "duration": 54700,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.values_are_given_for_looping()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dheraj",
      "offset": 9
    }
  ],
  "location": "MathsPracStepDefs.all_the_should_be_printed(String)"
});
formatter.result({
  "duration": 67000,
  "status": "passed"
});
formatter.after({
  "duration": 97400,
  "status": "passed"
});
formatter.before({
  "duration": 66700,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "key value details mapping",
  "description": "",
  "id": "mathematics-operations;key-value-details-mapping;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 57,
      "name": "@hugedata"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "data is given for key mapping",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "values are given for looping",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "all the \"mahalakshmi\" should be printed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.data_is_given_for_key_mapping()"
});
formatter.result({
  "duration": 52200,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.values_are_given_for_looping()"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mahalakshmi",
      "offset": 9
    }
  ],
  "location": "MathsPracStepDefs.all_the_should_be_printed(String)"
});
formatter.result({
  "duration": 87100,
  "status": "passed"
});
formatter.after({
  "duration": 43700,
  "status": "passed"
});
formatter.before({
  "duration": 52300,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "key value details mapping",
  "description": "",
  "id": "mathematics-operations;key-value-details-mapping;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 57,
      "name": "@hugedata"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "data is given for key mapping",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "values are given for looping",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "all the \"ravindra\" should be printed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.data_is_given_for_key_mapping()"
});
formatter.result({
  "duration": 57300,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.values_are_given_for_looping()"
});
formatter.result({
  "duration": 55700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravindra",
      "offset": 9
    }
  ],
  "location": "MathsPracStepDefs.all_the_should_be_printed(String)"
});
formatter.result({
  "duration": 93200,
  "status": "passed"
});
formatter.after({
  "duration": 55600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "key value details mapping",
  "description": "",
  "id": "mathematics-operations;key-value-details-mapping",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 72,
      "name": "@hugedatanew"
    },
    {
      "line": 72,
      "name": "@hugedata"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "data is given for key mapping",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "values are given for looping",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "all the \"\u003cloginnames\u003e\" and \"\u003cPasswords\u003e\" should be printed",
  "keyword": "Then "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "mathematics-operations;key-value-details-mapping;",
  "rows": [
    {
      "cells": [
        "loginnames",
        "Passwords"
      ],
      "line": 79,
      "id": "mathematics-operations;key-value-details-mapping;;1"
    },
    {
      "cells": [
        "dheraj",
        "kumar"
      ],
      "line": 80,
      "id": "mathematics-operations;key-value-details-mapping;;2"
    },
    {
      "cells": [
        "mahalakshmi",
        "bachu"
      ],
      "line": 81,
      "id": "mathematics-operations;key-value-details-mapping;;3"
    },
    {
      "cells": [
        "ravindra",
        "doctor"
      ],
      "line": 82,
      "id": "mathematics-operations;key-value-details-mapping;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 67500,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "key value details mapping",
  "description": "",
  "id": "mathematics-operations;key-value-details-mapping;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 72,
      "name": "@hugedata"
    },
    {
      "line": 72,
      "name": "@hugedatanew"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "data is given for key mapping",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "values are given for looping",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "all the \"dheraj\" and \"kumar\" should be printed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.data_is_given_for_key_mapping()"
});
formatter.result({
  "duration": 88900,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.values_are_given_for_looping()"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dheraj",
      "offset": 9
    },
    {
      "val": "kumar",
      "offset": 22
    }
  ],
  "location": "MathsPracStepDefs.all_the_and_should_be_printed(String,String)"
});
formatter.result({
  "duration": 80600,
  "status": "passed"
});
formatter.after({
  "duration": 26800,
  "status": "passed"
});
formatter.before({
  "duration": 65400,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "key value details mapping",
  "description": "",
  "id": "mathematics-operations;key-value-details-mapping;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 72,
      "name": "@hugedata"
    },
    {
      "line": 72,
      "name": "@hugedatanew"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "data is given for key mapping",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "values are given for looping",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "all the \"mahalakshmi\" and \"bachu\" should be printed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.data_is_given_for_key_mapping()"
});
formatter.result({
  "duration": 57200,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.values_are_given_for_looping()"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mahalakshmi",
      "offset": 9
    },
    {
      "val": "bachu",
      "offset": 27
    }
  ],
  "location": "MathsPracStepDefs.all_the_and_should_be_printed(String,String)"
});
formatter.result({
  "duration": 90600,
  "status": "passed"
});
formatter.after({
  "duration": 26000,
  "status": "passed"
});
formatter.before({
  "duration": 30800,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "key value details mapping",
  "description": "",
  "id": "mathematics-operations;key-value-details-mapping;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 72,
      "name": "@hugedata"
    },
    {
      "line": 72,
      "name": "@hugedatanew"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "data is given for key mapping",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "values are given for looping",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "all the \"ravindra\" and \"doctor\" should be printed",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MathsPracStepDefs.data_is_given_for_key_mapping()"
});
formatter.result({
  "duration": 91200,
  "status": "passed"
});
formatter.match({
  "location": "MathsPracStepDefs.values_are_given_for_looping()"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravindra",
      "offset": 9
    },
    {
      "val": "doctor",
      "offset": 24
    }
  ],
  "location": "MathsPracStepDefs.all_the_and_should_be_printed(String,String)"
});
formatter.result({
  "duration": 92300,
  "status": "passed"
});
formatter.after({
  "duration": 31900,
  "status": "passed"
});
});