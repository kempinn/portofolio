import { Award, Languages, Rocket} from "lucide-react"
export function dataCertificate() {
    return [
        {
            id: 1,
            slug : "Outstanding Student Certification",
            issued :"Binus University",
            date : "2023-2025",
            link : "images/certification/outstandingstudent.png",
            color: "border-yellow-500",
            skillColor:"bg-yellow-50 text-yellow-600 border border-yellow-100",
            iconColor: "text-yellow-600 bg-yellow-50",
            icon: <Award className="w-6 h-6" />,
            Description :"Impressive Performance Students during semesters, with a criteria acumulated score > 3.5",
            skills_act:[
                "System Design",
                 "UI UX Design",
                "Relational Database",
                "Manual Software Testing",
                "Data Visualization",
                "Project Management",
                "Non-Relational Database",
                "ETL Data",
                "Programming"
            ]
        },

        {
            id:2,
            slug : "Semi Finalist Duta Bahasa Binus @Semarang",
            issued : "Binus University",
            date : "14 January 2023",
            link : "images/certification/dutabahasa.png",
            color: "border-lime-500",
            skillColor:"bg-lime-50 text-lime-600 border border-lime-100",
            iconColor: "text-lime-600 bg-lime-50",
            icon: <Languages className="w-6 h-6" />,
            Description:"Semi Finalist as a Selected Duta Bahasa at Binus @Semarang",
            skills_act:[
                "Communication",
            ]
        },

        {
            id:3,
            slug : "P2MW Certification",
            issued : "Ministry of Education and Culture",
            date : "30 April 2024",
            link :"https://drive.google.com/drive/folders/1gqr6QMZH3vm3dy3-79hHUuiZGSK-e1lc?usp=sharing",
            color: "border-indigo-500",
            skillColor:"bg-indigo-50 text-indigo-600 border border-indigo-100",
            iconColor: "text-indigo-600 bg-indigo-50",
            icon: <Rocket className="w-6 h-6" />,
            Description : "Performing P2MW (Program Pembinaan Mahasiswa Wirausaha) National Competition as a BINUS @Semarang representative",
            skills_act:[
                "Collaboration",
                "Leadership",
                "Business Modelling",
                "Risk Management"

            ]
        }
    ]

}      
