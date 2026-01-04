import { Award, Languages, Rocket} from "lucide-react"
export function dataCertificate() {
    return [
        {
            id: 1,
            slug : "Outstanding Student Certification",
            issued :"Binus University",
            date : "2023-2025",
            color: "border-yellow-500",
            iconColor: "text-yellow-600 bg-yellow-50",
            icon: <Award className="w-6 h-6" />,
            Description :"Impressive Performance Students during semesters, with a criteria acumulated score > 3.5",
            skills_act:[
                "Java Programming",
                 "UML",
                "Accounting",
                "System Designing and Analysis",
                "Project Management",
                "Database Query and Modelling",
                "Testing",
                "Data Visualization"]
        },

        {
            id:2,
            slug : "Semi Finalist Duta Bahasa Binus @Semarang",
            issued : "Binus University",
            date : "14 January 2023",
            color: "border-lime-500",
            iconColor: "text-blue-600 bg-blue-50",
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
            color: "border-indigo-500",
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
