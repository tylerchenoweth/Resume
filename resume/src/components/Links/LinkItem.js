

export default function LinkItem({ icon, text }) {
  return (
    <div className="logoLinkCombo">
      <span dangerouslySetInnerHTML={{ __html: icon }} />
      &nbsp;
      <p>{text}</p>
    </div>
  );
}
