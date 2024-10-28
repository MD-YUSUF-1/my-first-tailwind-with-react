import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const studentMarks = [
        { id: 1, name: "Alice", mathMarks: 78, englishMarks: 85, scienceMarks: 82 },
        { id: 2, name: "Bob", mathMarks: 85, englishMarks: 79, scienceMarks: 88 },
        { id: 3, name: "Charlie", mathMarks: 92, englishMarks: 91, scienceMarks: 89 },
        { id: 4, name: "David", mathMarks: 67, englishMarks: 74, scienceMarks: 70 },
        { id: 5, name: "Eva", mathMarks: 74, englishMarks: 78, scienceMarks: 80 },
        { id: 6, name: "Frank", mathMarks: 88, englishMarks: 82, scienceMarks: 86 },
        { id: 7, name: "Grace", mathMarks: 91, englishMarks: 87, scienceMarks: 90 },
        { id: 8, name: "Henry", mathMarks: 79, englishMarks: 81, scienceMarks: 83 },
        { id: 9, name: "Isla", mathMarks: 83, englishMarks: 88, scienceMarks: 84 },
        { id: 10, name: "Jack", mathMarks: 95, englishMarks: 92, scienceMarks: 94 }
      ];
      
      

    return (

        <div>
            <LineChart width={1000} height={400} data={studentMarks} >
                <XAxis dataKey={"name"} ></XAxis>
                <YAxis ></YAxis>
    <Line type="monotone" dataKey="mathMarks" stroke="red" />
    <Line type="monotone" dataKey={"englishMarks"} stroke="green" />
    <Line type="monotone" dataKey="scienceMarks" stroke="blue" />
    
  </LineChart>
        </div>
    );
};

export default LineCharts;
