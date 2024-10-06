import "../styles/Tutors.css";
import PropTypes from "prop-types"; // Import PropTypes untuk validasi props

function Tutors(props) {
  return (
    <div className="tutor-list">
      {props.tutorsList.map((item) => {
        return (
          <div className="kartu-tutor" key={item.name}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

// Menambahkan validasi PropTypes
Tutors.propTypes = {
  tutorsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // name wajib ada dan tipe string
      image: PropTypes.string.isRequired, // image wajib ada dan tipe string
    })
  ).isRequired, // tutorsList harus array dan wajib diberikan
};

export default Tutors;
