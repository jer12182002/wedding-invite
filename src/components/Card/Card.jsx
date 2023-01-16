import Card from 'react-bootstrap/Card';

const CardContainer = ({ photos }) => {
  return (
    <Card className='card-container'>
      <Card.Body>
        <Card.Title>{photos}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
