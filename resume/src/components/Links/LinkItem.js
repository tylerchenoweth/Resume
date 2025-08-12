

export default function LinkItem({ icon, text }) {
  return (
    <div className="logoLinkCombo">
      <span className="linkIcon" dangerouslySetInnerHTML={{ __html: icon }} />
      &nbsp;
      <p>{text}</p>
    </div>
  );
}
