import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {

    const subjectsMarksData = 
        [
            { "id": 1, "student": "Alice", "math": 85, "physics": 78, "chemistry": 82 },
            { "id": 2, "student": "Bob", "math": 78, "physics": 85, "chemistry": 80 },
            { "id": 3, "student": "Charlie", "math": 92, "physics": 89, "chemistry": 91 },
            { "id": 4, "student": "David", "math": 74, "physics": 72, "chemistry": 70 },
            { "id": 5, "student": "Eva", "math": 88, "physics": 90, "chemistry": 87 },
            { "id": 6, "student": "Frank", "math": 81, "physics": 76, "chemistry": 84 },
            { "id": 7, "student": "Grace", "math": 95, "physics": 93, "chemistry": 96 },
            { "id": 8, "student": "Hannah", "math": 67, "physics": 65, "chemistry": 70 },
            { "id": 9, "student": "Ian", "math": 80, "physics": 79, "chemistry": 78 },
            { "id": 10, "student": "Jack", "math": 90, "physics": 92, "chemistry": 88 }
          ]
          
      
      

    return (
        <div>
            <LChart width={600} height={600} data={subjectsMarksData}>
            <XAxis dataKey="student"></XAxis>
            <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;