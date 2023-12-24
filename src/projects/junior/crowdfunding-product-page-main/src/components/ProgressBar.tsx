function ProgressBar({ progress }: { progress: number }) {
  if (progress > 100) progress = 100;
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default ProgressBar;
