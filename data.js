const data  = [
    // {
    //     id:1,
    //     type:"Mock",
    //     name:"Aptitude Placement 2022 - Mock test 3",
    //     date:"Sep 24",
    //     Participants:"1015",
    //     duration:"60 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"
    // },
    // {
    //     id:2,
    //     type:"Mock",
    //     name:"Service-Based Companies 2022 - Mock Test 3",
    //     date:"Sep 22",
    //     Participants:"1015",
    //     duration:"60 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"
    // },{
    //     id:3,
    //     type:"Mock",
    //     name:"Product-Based Companies 2022 - Mock Test 3",
    //     date:"Sep 19",
    //     Participants:"2015",
    //     duration:"60 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"
    // },{
    //     id:4,
    //     type:"Mock",
    //     name:"Aptitude Placement 2022 - Mock test 2",
    //     date:"Sep 13",
    //     Participants:"2410",
    //     duration:"60 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"
    // },{
    //     id:5,
    //     type:"Mock",
    //     name:"Service-Based Companies 2022 - Mock Test 2",
    //     date:"Sep 10",
    //     Participants:"1665",
    //     duration:"60 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"
    // },{
    //     id:6,
    //     type:"Mock",
    //     name:"Product-Based Companies 2022 - Mock Test 2",
    //     date:"Sep 8",
    //     Participants:"2440",
    //     duration:"60 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"
    // },{
    //     id:7,
    //     type:"Mock",
    //     name:"Aptitude Placement 2022 - Mock Test 1",
    //     date:"Aug 12",
    //     Participants:"2037",
    //     duration:"60 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"
    // },{
    //     id:8,
    //     type:"Mock",
    //     name:"Product-Based Companies 2022 - Mock Test 1",
    //     date:"Aug 10",
    //     Participants:"1930",
    //     duration:"60 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"
    // },{
    //     id:9,
    //     type:"Mock",
    //     name:"Service-Based Companies 2022 - Mock Test 1",
    //     date:"Aug 8",
    //     Participants:"2034",
    //     duration:"60 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg"
    // },{
    //     id:10,
    //     type:"Mock",
    //     name:"Service Based Companies Mock Series 2021 - Test 5",
    //     date:"Aug 2",
    //     Participants:"2564",
    //     duration:"120 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407560177-Service%20based%20icons_Service_based_T5.svg"
    // },{
    //     id:11,
    //     type:"TopicMock",
    //     name:"Aptitude",
    //     date:"Jul 31",
    //     Participants:"1795",
    //     duration:"120 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg"
    // },{
    //     id:12,
    //     type:"TopicMock",
    //     name:"Computer Networks",
    //     date:"Jul 27",
    //     Participants:"1719",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/IPv4.svg"
    // },{
    //     id:13,
    //     type:"TopicMock",
    //     name:"DataBase Management System",
    //     date:"Jul 24",
    //     Participants:"1815",
    //     duration:"120 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816734176-anomalies-and-functional-dependency.svg"
    // },{
    //     id:14,
    //     type:"TopicMock",
    //     name:"Algorithms",
    //     date:"Jul 20",
    //     Participants:"2095",
    //     duration:"120 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623765556116-backtracking.svg"
    // },{
    //     id:15,
    //     type:"TopicMock",
    //     name:"C Language",
    //     date:"Jul 10",
    //     Participants:"2145",
    //     duration:"120 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623815849291-arrays-and-pointers.svg"
    // },
    // {
    //     id:16,
    //     type:"TopicMock",
    //     name:"Operating System",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623817215289-atomic-transactions.svg"
    // },
    // {
    //     id:17,
    //     type:"TopicMock",
    //     name:"C++ Language",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816336071-abstraction.svg"
    // },
    // {
    //     id:18,
    //     type:"TopicMock",
    //     name:"Data Structures",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/array.svg"
    // },
    // {
    //     id:19,
    //     type:"TopicMock",
    //     name:"Java Language",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816917473-access-modifiers-this-super.svg"
    // },
    // {
    //     id:20,
    //     type:"TopicMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://d1.awsstatic.com/webteam/homepage/solutions/60-machine-learning.429b5b53e2d35f485ec2ab629aca861a4cd441b8.png"
    // },
    // {
    //     id:21,
    //     type:"CompanyMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/ibm.svg"
    // },
    // {
    //     id:22,
    //     type:"CompanyMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/hcl.svg"
    // },
    // {
    //     id:23,
    //     type:"CompanyMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/zenser.svg"
    // },
    // {
    //     id:24,
    //     type:"CompanyMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/accenture.svg"
    // },
    // {
    //     id:25,
    //     type:"CompanyMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/techmahindra.svg"
    // },
    // {
    //     id:26,
    //     type:"CompanyMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/techmahindra.svg"
    // },
    // {
    //     id:27,
    //     type:"CompanyMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/samsung.svg"
    // },
    // {
    //     id:28,
    //     type:"CompanyMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/hsbc.svg"
    // },
    // {
    //     id:29,
    //     type:"CompanyMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/adobe.svg"
    // },
    // {
    //     id:30,
    //     type:"CompanyMock",
    //     name:"Machine Learning",
    //     date:"Jul 7",
    //     Participants:"1896",
    //     duration:"120 min",
    //     img:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/honeywell.svg"
    // },


    // 
    
    // {
    //     id:1,
    //     name:"Batch Commencement",
    //     list1:["Get access to dashboard & complete plan","Access to recorded video lectures","One live session with mentors per week"],
    //     list2:["Introduction with lead mentor for this program","Access to Mock Tests","Every live session will be of 2 hours duration"],
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_batchcommencement.svg"
    // },
    // {
    //     id:2,
    //     name:"Learn required languages, framework & tools",
    //     list1:["Live online classes of Javascript, ReactJs, NodeJs,Express, HTML & CSS"],
    //     list2:["Learn the industry wide used tools like MongoDB, Git & Jira"],
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_language-full+stack.svg"
    // },
    // {
    //     id:3,
    //     name:"Complete awesome real world projects",
    //     list1:["HTML Blog Page","Todo App","Chat App"],
    //     list2:["Reminder Clock App","React Blog","E-commerce Web App"],
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_projects.svg"
    // },
    // {
    //     id:4,
    //     name:"Experience the complete development lifecycle",
    //     list1:["Learn the Agile Development Methodology"],
    //     list2:["Real time experience of complete software development lifecycle from development to deployment"],
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_lifecycle.svg"
    // },
    // {
    //     id:5,
    //     name:"Be a certified Full Stack Developer",
    //     list1:["Get certificate of course completion on completing projects, assignments & mock tests"],
    //     img:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/how-it-works/works_getcertified.svg"
    // },

    {
        id:1,
        type:"html",
        name:"BACKTRACKING PROJECT",
        description:"In this project I have used Pure HTML to create the page about backtracking algorithm. I have used different tags like heading tag, paragraph tag, image tag, div and span tags ,list tags like ul ,ol and table tags. It is a readonly page application to only read about Backtracking algorithm",
        topic:["HTML Introduction","HTML Attributes","HTML Elements","HTML Headings and Paragraphs","HTML Links","HTML Tables and Form","HTML Iframes","HTML Media","HTML Lists","ordered List", "Unordered List"],
        img:"https://lh3.googleusercontent.com/pw/ADCreHe2EDGQUqlIh9rq58wEfZbrdTPOtS3aqbqHlWVf_-eNi0eoMCNjIU085CGdZ2wYcROvzEs52iTg6ajSggjWi8eakFhUXo9abHyEOe7Zg2rXPNNUqXW2vYF3vKRcP9aW8ag1xMpZEGV6nDZUYIQfFOiYcZJE3Fbb2ki0b4U79fqLtZBANbpCAvXPlgieWcUOn0bkNxoufy7WXj_csWLR4SZPdHrl8q0e_S312CIFGigA5kSfJquptOQz4RXxln41-r_aO6H1O5CJsJf3-UMERJWmXkiQ2nZd0mS3Fz9B7hmijSIQMczcWUMYTulrUTEr1c-MbxZVZyJo30auGoaKCRq8xHvENrdpltT1VWel34olsq7y0TJotuq1P6wCzt6jy0bFe2N3S0tDXVYjZ8iHfGjfkmeYIKDAVO6lUVccXIUGJALeWY3qlVa8nujTE5fwiLX-fMouWg52KnNYqa6w1ssl-2YuJ7dkWxlj5r3R5TlLpG1RGZWbAGazGpB-l8wIE9ljMD15mS4Q_dWjhp1RxF4LnzyqIrA8-1l4KcezU-HmfCLLD9dwHqTL39Uzk5A01NJrT0d6SJZDWa6wg8B-jGsCOoQ_849T_0ic01EmRNj7p9U38DgC5NeImMerfSoRKfa1HVdKssyHMGH7dKkQDuDn0HOHQBzTumuPrm72rQlpRzMQJnzLZWRW3Fgo5HoJ-uVfbNsUKNv-WXWYYgFYGWYs6NGKLh3HFSWtJCoaynvpU4GHK6_-AIACsskjY50D2T6OSbPyWwcZ5adDDi1y9eCZNwB8Iqqkw7hQhx2FYe8Ghbe3wN9VRwgK6L6bgNZugLGlIJqMMntfCea8O9sRUCekjc6oh_2Dun_3Yg0xJOGLBjNbc_ycrvy2mNM4OcynyFZDD-EeIWyeH35Mtw9SCA=w1611-h730-s-no-gm?authuser=0"
    },
    {
        id:2,
        type:"css",
        name:"TO-DO-LIST WEB Version",
        description:"In this project I have used  HTML and CSS to create the to do app list. It is a static todo list. I have used HTMl tags and css properties to create this project.  It has multiple pages in it .I have created multiple static forms in this project.I have used external styling in this project. Styling properties like margin , padding, flex ,background-color etc are used in this project. ",
        topic:["Inline vs Internal vs External styling","CSS Font Styling"," background,margin", "padding,Styling Lists", "Tables", "Forms","Styling button", "Flex and properties","Grid and properties","Transition and Animations", "Combinators","PseudoElements and PseudoClasses","Media Queries"],
        img:"https://lh3.googleusercontent.com/pw/ADCreHdw8_DlMDtpPCXsqy3AE9YMx6S4HPj346E1sytoe0iVaM6e4kqJ5aw3bVkm38EEkG1WWz4p3jfea7BC9ACpjix49Cx660vNFHJWrNCA8VIsrpi9aEDW6ME6-GNO7HDwkdAVXLmiFvxG2G60nZWpgMqk2jYWRL2MqJJJJx57i_ZFjYOaJS_6_lIa8S8D7DCrr7wzddQ8noSF7Dknft-3eGom-0DmqTqyDZou7MpMkaVI5hMAJI6EwjR-0XdvDzk4d5Dzt7JYwjOskeV_TrMe6DIbZHogb0SC8-qo2fzZk1-CmujkS9vmx1MA3vvt-PhczhPybz4RyIjUqe2fU5L9X4w5mpuN5L09RyfVvur5aHajK4wQiBXQgRhmIkIlSW8xSKSyxmVaPWB0AUakBAX1gY3mHMY8W5xXat2N-u77VGv3rfdhMr9moNpSRJep6O-PlY_FCGgt3l8AjV2gAq6S-hE1ByVtbWe5ZPyvUJHaGxrsELDm283DJX53SWRlB5-wcEy54faUu9r-cUWirLvN0mFgU8paFwXlfjP2Bu9djSTsZGRYbTBA0xCFopvbdxYGKG0DEAuPV45pq7wb6dsXJomXWatM-ZDBUc_Fu24SZSpx8vB5TGtUORK1q-yQJmjvIEghbiNhWeOd02624mra-dnUDlNefyuO7p_33TBgSn_BwtP4A5ZtFDzCph--Wk5leX-8p6e9xTZbU1us7NleIZ7gFzJ2WfPD1OsUknq2ayputFI-081ppkYHDldRhPoSRf_eKWyWEKkS2P8AfNh2nKBDcnWN3usREFvBHuRWFjfYxs_1SNwWhBXYh1UloFJOeB_dffzfOaNb6jVT-Ed7GZeaGN9KDjSG2y1g-I9GJxB6MdcRtlqBAM4aE5ZVBaJcNFasWkZ0jdCgRqpOGSdtDw=w1304-h729-s-no-gm?authuser=0"
    },
    {
        id:3,
        type:"css",
        name:"TO-DO-LIST Mobile Version",
        description:"In this project I have used  HTML and CSS to create the to do app list. It is a static todo list. I have used HTMl tags and css properties to create this project.  It has multiple pages in it .I have created multiple static forms in this project.I have used external styling in this project. Styling properties like margin , padding, flex ,background-color etc are used in this project. It is same as web version but It has Media Queries in it Which makes it responsive and user friendly ",
        topic:["Inline vs Internal vs External styling","CSS Font Styling"," background,margin", "padding,Styling Lists", "Tables", "Forms","Styling button", "Flex and properties","Grid and properties","Transition and Animations", "Combinators","PseudoElements and PseudoClasses"],
        img:"https://lh3.googleusercontent.com/pw/ADCreHdCOqTgOTxtiAQ-LmCR8NnGz0D07gR1Dh5LY6OLkwtMHbZiVLo74kICz_10NmAHzv6J2sej_dFUDnhuT8zmIFIckfsWq0y8qbAI7H0M12DwriMS1ETfNZQ2IqL3Eb-VwILAh-HikuMKO3MoNh8HyXle9elaiy_PxaNGCf9XrDjSrL4o99kl0i2Hs9LBLWnCz7-uEpTa7-Y7Z_7DxYOE0Q_-qQuJ3su3JpDExxvLhg2uYe5Q3Zhep9HqsJMVGf_Dc_6TtkVXihV_uh6fou980sS_sQbuV3qXpseDLM4ZcBZfz-PZjhLsW1LRbh_iQqVNyE0kHh8kw1SHabnqzCDR6AkC0kkNtHernuAQ0ObpJMJBaGu28bcRKB3gNFFsW2gLtgyhwAM5Er3673rmaQUbPZ5HaiaBjcDmDQpqCT0jWvt6ojv-trE_wzJ_2qceH6GENmzy5r7vCj953U2eH21B89ElkviMtdbP944jGDJRifcS_SATY_cH_foZlgWwq8DyGMGSoo6xpuY7xYtYiMk0oiyZCqSShJNclw870bpRq2eT8OCYdTOgm5uUZGLq8rZy_ywC5dI-yp5sUEvxb4L0nuiXT_zjAFLJwk-GVgXa_06Yq0fwhX2m2Ug7hCAHMQHMRG9NeG339RhsZlusgQz5UQn8f4zOFS6FbOPrOBXfz22tZAYypU7T6VHlhxNeQww5Da49587z0OzPKBLdF0pKhiCqgbe08l8foaAM7m72laywKn8QbYtXNpxRVAUQ8zRRzRq4GIE49nrrADAV7y9P0sl0DjkRmA6FnaqdT6sMyc69LDuIJDYAkrrz09Nbuk8XdpMKZRdEy6dk1gFwfcWmkxb_zjJ00XEGyzcbs3TS41F4Za0TE8tK8QZgxOTFYIDK4DFtH5ldcjvHp0FVH598BA=w1215-h826-s-no-gm?authuser=0"
    },
    {
        id:4,
        type:"javascript",
        name:"Clock Project",
        description:"In this project I have used  HTML, CSS and Javascript to create the clock project. It is mobile responsive and dynamic. User can set time and alarm in this project. There is a real time clock in the right side of the project . Then user can select the time from the four present select in the left side and set alarm by hitting the button set alarm. Now our function will check if the real time is equal to the set time and if it matches then it will change the data accordingly",
        topic:["Introduction to JavaScript","Variables", "scoping", "Data type","Logic Building", "Strings and Numbers", "Operators", "Loops","Functions", "Arrays","Objects","Data Structures - Stack, Queues, Maps, Sets", "Searching Algorithms"," Sorting Algorithms","Problem Solving"],
        img:"https://lh3.googleusercontent.com/pw/ADCreHcqiB1sFw8BpIHuEUhZj10XUDyinSwemP1zKhnmFXdx8iaiT2ha6FXJWGQ46YMOgEIvpJMOqZxToe0MKxiN3mcYudO1mRioMbzrKxZivLVt_Xy6JWbSPrka63uD17sFm7KDCNYsFw-XHrqKWfwBQpIY28BHGsS1gDAeg1whtwG2xRuTf5gysirpIo-zZcoCPXSm6seXCQ88_ALMetJz9JH5tjhevjGrKHRhVA5zWzy7Bqd45oqjw_fyYbdHOEhJSV8oGGyacQlx_oiY1mkT7NSsp0HtYpWZa8KsfcEfSaasbq9uvexOSJ6TtfbRDAvP99mLqtq1gUUAZRgoPcpf14SzQOrzD8Z6T31yRrl40xU824XJsK_XaM07_7FNJxu_b2F8e6fnXS9oGyRuhTolfBGU9fb4vBFwLsjiaw10aMjmi5RhMkH9P8ONRkj6jeCkNerxghv0uu4xqKOgsu3z03jkvkVgLbgpgPHsDD5j2k_zRRVv_algXxSWMoYl1YwGmVcdF34WbSyy-MZiaIRimf7OIyws7CpotPtmbAVi0KUQN1dKxJoUQQEC9LJgzV8AxfnwhdpaTbR2pIKFt9YfSsS1Yv8qjUIDxUtxZqbhI6UbKP8gbu_v5XGCJLHZ2bwqzS6t8xRmrY8oK95J6iegN11oHLhsJ-JbLxRognY-9KkjMcP9OC0QcmcQWJFcQ4sOC1r-zghv0lRlnSisP6GiG17sV2zA0EDtHQQBduuBwzH1m4lFToV1VwFXZlI15oPEcBqUoFePWbM6kd1-W2k7VyM_2lbJMjLokdx-zw9g_amBdHs3byHlJ59YQc2C6oyAvvEfQ2W0S7vQXX8FZeRfJhMxm0aZXKt3PhMAEAhxSBK6JM4D4WZEXJF9ldAQBVA5B2e9fOYXTY-nkgdmf2D5nQ=w1630-h896-s-no-gm?authuser=0"
    },
    {
        id:5,
        type:"javascript",
        name:"TO-DO-LIST ",
        description:"In this project I have used  HTML,CSS and javascript to create the to do app list. It is a dynamic todo list. It is mobile responsive and user Friendly. I have created multiple pages and toggling between them with links. In this project user can create his own multiple todo lists and can create different todos for different list. User can mark the tasks which are completed by clicking on the task and then the task will have a line-through which shows that the task is completed ",
        topic:["Introduction to JavaScript","Variables", "scoping", "Data type","Logic Building", "Strings and Numbers", "Operators", "Loops","Functions", "Arrays","Objects","Data Structures - Stack, Queues, Maps, Sets", "Searching Algorithms"," Sorting Algorithms","Problem Solving"],
        img:"https://lh3.googleusercontent.com/pw/ADCreHd-rrbkSfYz3nhFnOXhNuHm4HWWoIwUe84V62wRB6Bv2vOua-mL6YmfbOJR7PeA48E_K2-co2vHw8AgeJ-o0viKApr03l6m5O3qTPl8rGj_LmPTUEMBmkTGvwc_TnHqtwLIW_ThfdcbRPHAIoEv2MtnCMY1mWqol2Pk-wLsGYjrZ8niFNyyQH8A05qFJ_XzIsvd6iO9TG-E8tH_uW8ZSEq-vjQNDmVW38AOLHyNFBHh_GRCLCgOddsJoUUc9q6_GgDAb5mChujB7otul47Asb_4OkwlgzpuqKutlYQpeO_xCN8x5TBdWr5J1regmrZpVFRFiWrTmnTTrNiMwyULkOosJA6sdrpjjlQ3pbS2DGPT8JUO0MAgH7jjIKceVDaBvG8tA1YIPjnwEjAF0xwrglIPtjSsE7Qw6lIh-f8tVliC7mCf9UShMnmFfrDHgPaA2Z1K8X9ksOXNtOnXRsAtOmw4OYUx6Rd8XFuxc7ClQp3MP5lYXCAz1axN5y5H2tgayn9-jVsFrX2hZh30YageOBDpS98M8Ods9X8bt1z4q0je3pxrqdwb4vfvI9hSRGaJ1z4KXzNFrj7WqioCAa95NUHhIMAMyou_GRpFokuBjjGsEBe8b6Eaq0Ol-oslOW9IFbmKH9SqF443MCEaD3gfgZpbFkNur45jsj1MecwsWV14prvpjZf4m2Meu5fb8Fns-hEwQSwzu5xcOBYRuN6uG3-tV1VY_ojLsKYqbkDORSLe2mwL58W73e1056XVJOmcPTwCmmTEO-jvnBymnDuxB5kuXI5rSm3jRFjIvMx3OBqafq4ar5qskED5vIv9th7ySL2jjDB7hxeHdYrHv6inFW19FukInZVxNo1xWca-_iT1c5R3HD6GhIHDE7mcQkz7tK1e4zXM5YmBZEBstkzX4w=w1920-h927-s-no-gm?authuser=0"
    },{
        id:6,
        type:"reactjs",
        name:"The Siren -Blog Project",
        description:"The Siren is a blog project created with the help of html,css,javascript and reactjs. As it is created with the help of react js it is a single page application . I have created different routes for differnt components like Home, Bollywood, Hollywood,Technology,Fitness and Food. User can read differnt types of articles about some static topics. I have used npm to download the necessary modules required by the projects . I have used the concept of contextapi to circulate the data in different component and avoid props drilling. It is mobile responsive website",
        topic:["React Intro","Node installation","Create an app using create-react-app","Understanding basics of react app","Understanding JSX","Understanding virtual DOMS ,Single page apps","React Lifecycle","States ,class components vs functional components","Event handling and Props","Building forms in React","Routes","Conditional Rendering","Pure Components","High order components","Controlled vs Uncontrolled components","React Hooks","Redux","Babel, Webpack","Axios, Creating a mock server","SASS overview"],
        img:"https://photos.fife.usercontent.google.com/pw/ADCreHftS5m-5b_KDKclUeRSA8eoOIqSfwsx7c9wDJpBpk6P1atF8jxIUYE3=w1920-h930-s-no-gm?authuser=0"
    },{
        id:7,
        type:"nodejs",
        name:"The Siren -Blog Project with Backend",
        description:"The Siren is a blog project created with the help of html,css,javascript, reactjs and nodejs. It is a mobile responsive blog website. In This project I have created a backend using node js. Backend was created using express and routing and controllers in it. All the data used in the Front end of the website was called from the backend through different routes . I have used cors policy to maintain the realation between front and backend . Front-end part have used axios in the useEffect hook to call the data from backend and stored the data inside a state hook to manage the state of data.",
        topic:["Nodejs Intro","Creating a Simple Server using HTTP read and write", "Creating a Simple Server using Express","Response types - HTML, JSON","Routing","Express Introduction","ntergrate Frontend and Backend","Express Params ","Express Querry ","Express Middleware","API Authentication","JWT Token","Bcrypt","Login and Logout","Socket Programming"],
        img:"https://lh3.googleusercontent.com/pw/ADCreHd9IANZknyiceGVlIKRc2x6pZRFPmM4PUMT-onZyGvIeCaM03RXVOreif-kFjKfbCA8T7gxjvCTl4V4YBYdm37ICOuCxC9WW5JQodsJgJNm7a2y_cgtx38WB-7Ie_gTPYWxkvgxXoU7pphyOYqwMHgSQ8qPS2PTwachsC0HFSW-9jzwdg0lwseqQ9leHfEONgafiUr_4J_vEL2ZsrjTutYtzo1HYqkt6Bv2EYaWBSx3oVG6uKl82vTJNsB1nRDDTh6-tHcErnnAQgL-E9he4sqjsHrH2Yb4LAjK_3p4C2GDR4cBqwurR4l14d7Jq0mk1vbjTw5JmPtR9CxGn-R35mmjuKLaxWnXQTJ_ntUj8raY4a06cpfe1dQRbml24-zJsj0drJykc_zmdi-RrdbI6evfTW20wSJh0CxqP9LnFCYMZQZHcHrJ7ehPOaMGuOSjRQxPp9W3InoWcjVfZ2l87UVs8VbKe_KK4grrrUBBsUc1PwdR2j49C6kmmOKin6plGS72RCFdeVpVyAS6zPUmok4Pzh_xrydnG6037KUDXbkWJnnaMPTA8bycQ1J3CGSy8OMS1PwrWKxy6cbDI8XQ2gBEEK3YhTcepBZapYcbAhyt5t0BmgHrCB_Bmb5RIQS9X4PsHLIlglcq52zKYKAmxJ2KFCPAJYXpY8TmeeyMj8d0cUjpEyVqpbo2j3j0Dh4WtcrBWYOXOPafgrnJiDslmoeqddZIhn-9EDod-aTrOiIa6vUGdGYB-CKHIqZ0KcolbyPKRd5N3dkr23PpglNgR29-zNwRIBruy5QD0iLF-gUWdfNklmc0Yh55yBL4bnkZ9gQ7qts7aDj2iYWptoQ444Ke2TG1yVEiqFyOWN5T_UPv_pp6srtiH8DhPiR0qpfpq85Hj1dbjuHNJN6LBp-ZGw=w1915-h933-s-no-gm?authuser=0"
    },
    {
        id:8,
        type:"mongodb",
        name:"TechShop",
        description:"Tech Shop is an ecommerce website created with the help of html, css, javascript, reactjs, nodejs and mongodb. It is a responsive single page application . Their is a login signup system where user can create his account and browse through all the products . User can use the add to cart functionality to add the product in his cart. Their is a search engine present indide the store component with which user can search the product with names. I have used monngo db to save the data and user credintials . Razorpay is used as the payment gateway and after the user hit make payment button the data of the cart will be removed from the cart and will be saved in the diffent collection ",
        topic:["Database Intro","SQL vs NOSQL","MongoDb Overview","Installing MongoDB","Connecting and Inserting Data","Mongo Shell","Mongo Client","Mongoose","Deleting and updating Data","Understanding CRUD operations","NodeMailer","Multer","FsModulea"],
        img:"https://lh3.googleusercontent.com/pw/ADCreHd9IANZknyiceGVlIKRc2x6pZRFPmM4PUMT-onZyGvIeCaM03RXVOreif-kFjKfbCA8T7gxjvCTl4V4YBYdm37ICOuCxC9WW5JQodsJgJNm7a2y_cgtx38WB-7Ie_gTPYWxkvgxXoU7pphyOYqwMHgSQ8qPS2PTwachsC0HFSW-9jzwdg0lwseqQ9leHfEONgafiUr_4J_vEL2ZsrjTutYtzo1HYqkt6Bv2EYaWBSx3oVG6uKl82vTJNsB1nRDDTh6-tHcErnnAQgL-E9he4sqjsHrH2Yb4LAjK_3p4C2GDR4cBqwurR4l14d7Jq0mk1vbjTw5JmPtR9CxGn-R35mmjuKLaxWnXQTJ_ntUj8raY4a06cpfe1dQRbml24-zJsj0drJykc_zmdi-RrdbI6evfTW20wSJh0CxqP9LnFCYMZQZHcHrJ7ehPOaMGuOSjRQxPp9W3InoWcjVfZ2l87UVs8VbKe_KK4grrrUBBsUc1PwdR2j49C6kmmOKin6plGS72RCFdeVpVyAS6zPUmok4Pzh_xrydnG6037KUDXbkWJnnaMPTA8bycQ1J3CGSy8OMS1PwrWKxy6cbDI8XQ2gBEEK3YhTcepBZapYcbAhyt5t0BmgHrCB_Bmb5RIQS9X4PsHLIlglcq52zKYKAmxJ2KFCPAJYXpY8TmeeyMj8d0cUjpEyVqpbo2j3j0Dh4WtcrBWYOXOPafgrnJiDslmoeqddZIhn-9EDod-aTrOiIa6vUGdGYB-CKHIqZ0KcolbyPKRd5N3dkr23PpglNgR29-zNwRIBruy5QD0iLF-gUWdfNklmc0Yh55yBL4bnkZ9gQ7qts7aDj2iYWptoQ444Ke2TG1yVEiqFyOWN5T_UPv_pp6srtiH8DhPiR0qpfpq85Hj1dbjuHNJN6LBp-ZGw=w1915-h933-s-no-gm?authuser=0"
    },
    // {
    //     id:1,
    //     type:"student",
    //     name:"Chelsea",
    //     company:"Juspay",
    //     description:"Prepbytes really helped me start my prep from basic. The teachers are really helpful and were always available to clear my doubts. Thats the reason I was able to crack the interview and land an internship.",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/chelsea_Juspay-1.webp",
        
    // },
    // {
    //     id:2,
    //     type:"student",
    //     name:"Susovan Gosh",
    //     company:"StepSetGo",
    //     description:"It's absolutely awesome guys. Go for it without a second thought and you won't regret it!",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/SusovanGhosh.webp",
        
    // },
    // {
    //     id:3,
    //     type:"student",
    //     name:"Akash Bhist",
    //     company:"AccelQ",
    //     description:"Thank you prepbytes for providing wonderful opportunity during Covid time. Its constant mentorship support program helped me to enhance my coding skills and also to get a job at a reputed company. Thanks a lot.",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/akash_bisht.webp",
        
    // },
    // {
    //     id:4,
    //     type:"student",
    //     name:"Tanej",
    //     company:"Authbridge",
    //     description:"Prepbytes helped  me in getting a job.I helps to fill the gap between theory and practice. Mainly what I like is the set of problems which are given just after the concept is very useful. Their doubt solving platform is good and fast. They don't give answer directly instead they ask your approach and correct that approach, this helps very much in technical interview.",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Tanej+Kumar+Kata.webp",
        
    // },
    // {
    //     id:5,
    //     type:"student",
    //     name:"Akshay",
    //     company:"Indiamart",
    //     description:"A wonderful place to learn. PrepBytes helped me in learning important topics for coding interiew and also getting placed in Indiamart. ",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Akshay_indiamart.webp",
        
    // },
    // {
    //     id:6,
    //     type:"student",
    //     name:"Shubham Mishra",
    //     company:"Blowhorn",
    //     description:"I enrolled in Placement Program in the month of November and within 6 months Prepbytes arranged 3-4 interviews in Product based companies/startup. The course content and practice questions are up to mark, the biggest advantage of this is that you will get a doubt clearing platform and weekly live sessions from engineers working in top product based MNCs.",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Shubham+Mishra.webp",
        
    // },
    // {
    //     id:7,
    //     type:"student",
    //     name:"Shivam Gupta",
    //     description:"My coding experience has improved very much. After joining the program, I am able to write optimized code. The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.",
    //     profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg",
    //     company:"BuyHatke"
        
    // },
    // {
    //     id:8,
    //     type:"student",
    //     name:"Shivani Ravi",
    //     description:"PrepBytes have helped me improve my analytical skills & helped me in all the ways possible. My understanding of questions and logic has also increased. The best thing about PrepBytes are the lectures, it is so simple and everything is explained with examples. ",
    //     profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/shivani+Ravi.svg",
    //     company:"Sap Labs"
        
    // },
    // {
    //     id:9,
    //     type:"student",
    //     name:"Abhishek Kumar",
    //     description:"Lectures are up to the mark, concepts are crystal clear by the mentors. And the best part about the course is weekly assignments were provided to us which were not just good but ensuring that we were understanding the concepts but also improved our coding skills considerably ",
    //     profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Abhishek+Kumar.svg",
    //     company:"Tek System"
        
    // },
    // {
    //     id:10,
    //     type:"student",
    //     name:"Nikhil",
    //     description:"I got a mentor who was very knowledgeable & guided me throughout my placement journey. She explained everything very precisely and clearly & helped me with my doubts and coding problems. PrepBytes helped me a lot in gaining confidence. I thank PrepBytes for their effort. ",
    //     profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Nikhil.svg",
    //     company:"Sap Labs"
        
    // },
    // {
    //     id:11,
    //     type:"mentor",
    //     name:"Mamta Kumari",
    //     description:"Mamta has 4.5 years of experience as a Software Developer. She has great passion towards coding and motivates students to pursue coding.Her mission is to use her knowledge and expertise to help students get placed in their dream company.",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/mamta_ma'am(Mentor).webp",
    //     company:"Ex Amazon, Samsung - Cofounder PrepBytes",
    //     companyimg:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/amazon.webp",

        
    // },
    // {
    //     id:12,
    //     type:"mentor",
    //     name:"Kunal Dwivedi",
    //     description:"Kunal has switched from Samsung to Amazon recently and likes to spend time teaching students who are walking down the same road. He love competitive programming and have secured under 100 rank in various coding challenges and 287 rank in Google Kickstart.",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Kunal.webp",
    //     company:"Software Developer, Amazon",
    //     companyimg:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/amazon.webp",

        
    // },
    // {
    //     id:13,
    //     type:"mentor",
    //     name:"Harshita Sharma",
    //     description:"Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. She has 3+ years of MERN Stack Exp. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/mentor_harshita.webp",
    //     company:" Product Engineer, AskSid.ai",
    //     companyimg:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/ask_sid.png",

        
    // },
    // {
    //     id:14,
    //     type:"mentor",
    //     name:"Aditya",
    //     description:"Aditya has over 5 years of industry experience and has been part of multiple hiring sprees. He is a placement expert and knows very well what is required to nail it in interviews.",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Aditya_bhusan.png",
    //     company:" Co-Founder, PrepBytes",
    //     companyimg:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/PrepBytes.png",

        
    // },
    // {
    //     id:15,
    //     type:"mentor",
    //     name:"Aveek",
    //     description:"Aveek is a Technical Content Engineer / Mentor at PrepBytes and has mentored more than 2500 students to date. His teaching methodology is very engaging and highly appreciated by students",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aveek_sir.png",
    //     company:"Mentor, PrepBytes",
    //     companyimg:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/PrepBytes.png",

        
    // },
    // {
    //     id:16,
    //     type:"mentor",
    //     name:"Virali",
    //     description:"Virali is one of the top coders of the country. She has mentored thousands of students at PrepBytes and has motivated them to think big and achieve big.",
    //     profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/virali_vora.png",
    //     company:"SDE, Google",
    //     companyimg:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google_logo.png",

        
    // },
   
]

module.exports = data
