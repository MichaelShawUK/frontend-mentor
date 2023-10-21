interface Props {
  title: string;
  summary: string;
}

function SidebarPreview({ title, summary }: Props) {
  return (
    <div className="sidebar-preview">
      <h4>{title}</h4>
      <p>{summary}</p>
    </div>
  );
}

export default SidebarPreview;
