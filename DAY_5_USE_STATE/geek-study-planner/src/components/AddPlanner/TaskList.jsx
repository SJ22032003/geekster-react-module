import PropType from "prop-types";

// eslint-disable-next-line react/prop-types
function TaskList({ subject, hours }) {
  return (
    <div>
      <span>{subject}</span>
      <span> - </span>
      <span>{hours}</span>
    </div>
  );
}

export default TaskList;

TaskList.prototype = {
  subject: PropType.string,
  hours: PropType.string,
};
