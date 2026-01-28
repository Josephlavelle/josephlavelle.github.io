import { useEffect, useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { socials } from '../../data/content';
import styles from './GitHubStats.module.css';

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

export function GitHubStats() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);

  const username = socials.github.split('/').pop() || 'josephlavelle';

  useEffect(() => {
    async function fetchContributions() {
      try {
        // Fetch from GitHub's contribution calendar
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        const data = await response.json();

        if (data.contributions) {
          // Get last 70 days (10 weeks)
          const allDays = data.contributions.slice(-70);
          setContributions(allDays);
        }
      } catch (error) {
        console.error('Failed to fetch contributions:', error);
        // Generate placeholder data
        const placeholderDays: ContributionDay[] = [];
        const today = new Date();
        for (let i = 69; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          placeholderDays.push({
            date: date.toISOString().split('T')[0],
            count: 0,
            level: 0,
          });
        }
        setContributions(placeholderDays);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, [username]);

  // Organize into weeks (columns)
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  const getLevelColor = (level: number) => {
    const root = document.documentElement;
    const accentRgb = getComputedStyle(root).getPropertyValue('--accent-rgb').trim() || '59, 130, 246';
    const secondaryRgb = getComputedStyle(root).getPropertyValue('--accent-secondary-rgb').trim() || '236, 72, 153';

    const colors = [
      'rgba(255, 255, 255, 0.05)',      // level 0
      `rgba(${accentRgb}, 0.3)`,        // level 1
      `rgba(${accentRgb}, 0.5)`,        // level 2
      `rgba(${accentRgb}, 0.7)`,        // level 3
      `rgba(${secondaryRgb}, 0.9)`,     // level 4
    ];
    return colors[level] || colors[0];
  };

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  return (
    <a
      href={socials.github}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.header}>
        <div className={styles.left}>
          <Github size={18} className={styles.icon} />
          <span className={styles.username}>@{username}</span>
        </div>
        <ArrowUpRight size={16} className={styles.arrow} />
      </div>

      <div className={styles.heatmap}>
        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <div className={styles.grid}>
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className={styles.week}>
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={styles.day}
                    style={{ backgroundColor: getLevelColor(day.level) }}
                    title={`${day.date}: ${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <span className={styles.total}>{totalContributions} contributions</span>
        <span className={styles.period}>last 10 weeks</span>
      </div>
    </a>
  );
}
