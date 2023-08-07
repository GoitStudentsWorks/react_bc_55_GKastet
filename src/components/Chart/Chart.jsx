import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { colors } from 'components/Table/Table';
import { useCategoriesType } from 'hooks/selectedCategories';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectBalance, selectSummary } from 'redux/selectors';
ChartJS.register(ArcElement, Tooltip, Legend);

//example
// export const datas = [
//   {
//     name: 'cash',
//     type: 'INCOME',
//     total: 1300,
//   },
//   {
//     name: 'car',
//     type: 'EXPENSE',
//     total: 700,
//   },
//   {
//     name: 'house',
//     type: 'EXPENSE',
//     total: 400,
//   },
//   {
//     name: 'denaro',
//     type: 'EXPENSE',
//     total: 3000,
//   },
// ];

export const Chart = () => {
  const balance = useSelector(selectBalance);
  const summary = useSelector(selectSummary);
  const [expenseCategories] = useCategoriesType(summary); //example

  const data = {
    labels: [],
    datasets: [
      {
        lable: '# of Votes',
        data: !expenseCategories.length
          ? [1]
          : expenseCategories.map(item => item.total),
        backgroundColor: colors,
        borderColor: colors,
        cutout: '75%',
        hoverOffset: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <span>Element Chart</span>
      <div>
        <Doughnut data={data} options={options}></Doughnut>
        <p>₴ {balance}</p>
      </div>
    </div>
  );
};
