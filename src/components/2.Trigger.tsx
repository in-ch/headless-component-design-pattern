/**
 * @description label과 onClick 핸들러를 매개 변수로 받으며, 주변 컨텍스트에 구애받지 않는다.
 */
const Trigger = ({
    label,
    onClick,
  }: {
    label: string;
    onClick: () => void;
  }) => {
    return (
      <div className="trigger" tabIndex={0} onClick={onClick}>
        <span className="selection">{label}</span>
      </div>
    );
};

export default Trigger;