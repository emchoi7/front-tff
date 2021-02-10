const recordsData = [
    {
        "id": 10,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "08:14:00",
        "score": 3.4,
        "text": "I’m feeling pretty hungry now. I’m going to eat lunch soon. I brought lunch from home today and am looking forward to my sandwich! YUM"
    },
    {
        "id": 11,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "09:10:00",
        "score": 2.6,
        "text": "I love breakfast!"
    },
    {
        "id": 12,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "09:23:00",
        "score": 2.3,
        "text": "I'm so hungry!!"
    },
    {
        "id": 13,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "09:31:00",
        "score": 3.1,
        "text": "I think I'm gonna eat something soon!"
    },
    {
        "id": 14,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "09:45:00",
        "score": 4.3,
        "text": "I love chocolate!"
    },
    {
        "id": 15,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "11:13:00",
        "score": 3.2,
        "text": ""
    },
    {
        "id": 16,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "12:12:00",
        "score": 3.0,
        "text": ""
    },
    {
        "id": 17,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "12:23:23",
        "score": 4.3,
        "text": ""
    },
    {
        "id": 18,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "12:41:00",
        "score": 7.4,
        "text": ""
    },
    {
        "id": 19,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "13:20:00",
        "score": 6.6,
        "text": ""
    },
    {
        "id": 20,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "12:24:00",
        "score": 4.3,
        "text": ""
    },
    {
        "id": 21,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "15:39:00",
        "score": 4.2,
        "text": ""
    },
    {
        "id": 22,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "16:29:00",
        "score": 3.5,
        "text": ""
    },{
        "id": 23,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "17:13:00",
        "score": 3.0,
        "text": ""
    },{
        "id": 24,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "18:30:00",
        "score": 6.0,
        "text": ""
    },{
        "id": 25,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "18:43:00",
        "score": 5.5,
        "text": ""
    },
    {
        "id": 26,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "20:41:00",
        "score": 3.9,
        "text": ""
    },
    {
        "id": 27,
        "year": "2020",
        "day": "30",
        "month": "12",
        "time": "21:41:00",
        "score": 3.2,
        "text": ""
    },
    {
        "id": 28,
        "year": "2020",
        "day": "31",
        "month": "12",
        "time": "07:21:00",
        "score": 2.7,
        "text": ""
    },
    {
        "id": 29,
        "year": "2020",
        "day": "31",
        "month": "12",
        "time": "08:02:00",
        "score": 2.0,
        "text": ""
    },
    {
        "id": 30,
        "year": "2020",
        "day": "31",
        "month": "12",
        "time": "08:11:00",
        "score": 3.4,
        "text": ""
    },
    {
        "id": 31,
        "year": "2020",
        "day": "31",
        "month": "12",
        "time": "11:21:00",
        "score": 4.3,
        "text": ""
    },
    {
        "id": 32,
       "year": "2020",
       "day": "31",
       "month": "12",
        "time": "13:34:00",
        "score": 4.1,
        "text": ""
    },
    {
        "id": 33,
        "year": "2020",
        "day": "31",
        "month": "12",
        "time": "08:35:00",
        "score": 3.9,
        "text": ""
    },
    {
        "id": 34,
        "year": "2020",
        "day": "31",
        "month": "12",
        "time": "10:35:00",
        "score": 7,
        "text": ""
    },
    {
        "id": 35,
        "year": "2021",
        "day": "1",
        "month": "1",
        "time": "11:49:00",
        "score": 4.1,
        "text": ""
    },
    {
        "id": 36,
        "year": "2021",
        "day": "1",
        "month": "1",
        "time": "14:35:00",
        "score": 2.8,
        "text": ""
    },
    {
        "id": 37,
        "year": "2021",
        "day": "1",
        "month": "1",
        "time": "15:05:00",
        "score": 5.0,
        "text": ""
    },
    {
        "id": 38,
        "year": "2021",
        "day": "1",
        "month": "1",
        "time": "17:31:00",
        "score": 6.4,
        "text": ""
    },
    {
        "id": 39,
        "year": "2021",
        "day": "1",
        "month": "1",
        "time": "18:23:00",
        "score": 7.1,
        "text": ""
    }
]

export default recordsData;