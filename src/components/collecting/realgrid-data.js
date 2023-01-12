import {ValueType} from "realgrid";

export const fields = [
    {
        fieldName: 'order_code',
        dataType: ValueType.TEXT,
    },
    {
        fieldName: "Bool",
        dataType: ValueType.BOOLEAN,
    },
    {
        fieldName: 'visit_status',
        dataType: ValueType.TEXT,
    },
    {
        fieldName: 'prescribe_dt',
        dataType: ValueType.TEXT
    },
    {
        fieldName: 'user_name',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'department_name',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'status_name',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'prescribe_code',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'sample_code',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'vessel_code',
        dataType: ValueType.TEXT
    }, {
        fieldName: 'classification_code',
        dataType: ValueType.TEXT
    }];

export const columns = [
    {
        name: "Bool",
        fieldName: "Bool",
        width: "25",
        editable: false,
        renderer: {
            type: "check"
        },
        header: {
            text: " "
        }
    },
    {
        name: "prescribe_code",
        fieldName: "prescribe_code",
        type: "data",
        width: "58",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "처방코드",
        }
    },
    // {
    //     name: "visit_status",
    //     fieldName: "visit_status",
    //     type: "data",
    //     width: "55",
    //     editable: false,
    //     styles: {
    //         textAlignment: "center"
    //     },
    //     header: {
    //         text: "방문상태"
    //     },
    // },
    {
        name: "prescribe_dt",
        fieldName: "prescribe_dt",
        type: "data",
        width: "103",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "처방날짜",
        }
    },
    {
        name: "status_name",
        fieldName: "status_name",
        type: "data",
        width: "90",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "상태"
        },
    },
    {
        name: "user_name",
        fieldName: "user_name",
        type: "data",
        width: "50",
        editable: false,
        styles: {
            "textAlignment": "center"
        },
        header: "처방의사"
    }, {
        name: "order_code",
        fieldName: "order_code",
        type: "data",
        width: "80",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "오더코드"
        },
        renderer: {
            type: "text",
        }
    },
    {
        name: "department_name",
        fieldName: "department_name",
        type: "data",
        width: "65",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "진료과"
        },
    }, {
        name: "sample_code",
        fieldName: "sample_code",
        type: "data",
        width: "60",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "검체코드",
        },
    },
    {
        name: "vessel_code",
        fieldName: "vessel_code",
        type: "data",
        width: "55",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "용기코드"
        },
    }, {
        name: "classification_code",
        fieldName: "classification_code",
        type: "data",
        width: "40",
        editable: false,
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "분류"
        },
    },
]

export const rows = [{
    "Name": "Kessie",
    "FullName": "Vijendra N. Raj",
    "Email": "mus.Donec.dignissim@Praesent.edu",
    "Company": "Arcu Et Pede Incorporated",
    "Age": "17"
},
    {
        "Name": "Evelyn",
        "FullName": "Hridaynath K. Ismail",
        "Email": "fringilla.euismod@elementum.edu",
        "Company": "Aliquam Tincidunt Ltd",
        "Age": "28"
    },
    {
        "Name": "Colleen",
        "FullName": "Kanwalkishore C. Khan",
        "Email": "tellus.non.magna@porttitorvulputate.org",
        "Company": "Ultrices Duis Volutpat Institute",
        "Age": "38"
    },
    {
        "Name": "Velma",
        "FullName": "Dharani P. Patel",
        "Email": "ipsum@orcilobortisaugue.net",
        "Company": "Posuere Associates",
        "Age": "25"
    },
    {
        "Name": "Fallon",
        "FullName": "Preeti M. Singh",
        "Email": "rutrum@orci.com",
        "Company": "Turpis Nec Inc.",
        "Age": "46"
    },
    {
        "Name": "Alexis",
        "FullName": "Karnik Y. Patel",
        "Email": "auctor.nunc.nulla@egestas.net",
        "Company": "Massa Quisque Porttitor Industries",
        "Age": "34"
    },
    {
        "Name": "Camille",
        "FullName": "Satyamurty A. Singh",
        "Email": "Nunc@blanditenimconsequat.co.uk",
        "Company": "Lorem Lorem Luctus PC",
        "Age": "22"
    },
    {
        "Name": "Aristotle",
        "FullName": "Ora C. Rowe",
        "Email": "sed.orci@libero.edu",
        "Company": "Integer Aliquam Corporation",
        "Age": 53
    },
    {
        "Name": "Anthony",
        "FullName": "Alea Bailey",
        "Email": "orci.luctus.et@Cum.ca",
        "Company": "Eros Nam Corp.",
        "Age": 58
    },
    {
        "Name": "Hakeem",
        "FullName": "Kadeem J. Patel",
        "Email": "aliquet.diam.Sed@penatibuset.com",
        "Company": "Ligula Aenean Gravida Consulting",
        "Age": 36
    },
    {
        "Name": "Raja",
        "FullName": "Chloe Valentine",
        "Email": "Cras.dictum@vulputatenisi.ca",
        "Company": "Erat Eget Tincidunt Institute",
        "Age": 40
    },
    {
        "Name": "Shad",
        "FullName": "Zoe P. Boyd",
        "Email": "Sed@semperpretium.edu",
        "Company": "Amet LLP",
        "Age": 22
    },
    {
        "Name": "Autumn",
        "FullName": "Brittany U. Copeland",
        "Email": "sit.amet@interdumSedauctor.co.uk",
        "Company": "Nisi Cum Sociis PC",
        "Age": 36
    }]