import './StatisticsRendes.css';
import sadFace from './images/sad-face.png';
import happyFace from './images/happy-face.png';

const StatisticsRendes = ({ good, neutral, bad, countTotalFeedback }) => {
  const countPositiveFeedbackPercentage = () => {
    const positivPercentage = Math.round((good / countTotalFeedback) * 100);
    return positivPercentage || 0;
  };
  const data = [
    { id: 1, text: 'Good: ', value: good },
    { id: 2, text: 'Neutral: ', value: neutral },
    { id: 3, text: 'Bad: ', value: bad },
    { id: 4, text: 'Total: ', value: countTotalFeedback },
    {
      id: 5,
      text: 'Positiv feedback: ',
      value: countPositiveFeedbackPercentage(),
      percentage: '%',
    },
  ];

  return (
    <div className="display-feedbacks">
      <div className="feedback-text">
        {data.map(item => {
          return (
            <p className="statistic" key={item.id}>
              {item.text}
              {item.value}
              {item.percentage}
            </p>
          );
        })}
      </div>
      {countPositiveFeedbackPercentage() >= 50 && (
        <img src={happyFace} alt="imag" />
      )}
      {countPositiveFeedbackPercentage() < 50 && (
        <img src={sadFace} alt="imag" />
      )}
    </div>
  );
};
export default StatisticsRendes;
