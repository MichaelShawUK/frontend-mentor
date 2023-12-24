function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default ProgressBar;
