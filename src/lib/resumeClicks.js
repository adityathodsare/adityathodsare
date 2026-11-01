export function recordResumeClick() {
  fetch("/api/resume-clicks", { method: "POST", keepalive: true })
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      if (Number.isFinite(data?.count)) {
        window.dispatchEvent(
          new CustomEvent("resume-click-count-updated", {
            detail: data.count,
          })
        );
      }
    })
    .catch(() => {});
}
