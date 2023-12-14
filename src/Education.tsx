import React from 'react';
import { useStyletron } from 'baseui';
import { Input } from 'baseui/input';

const Education = () => {
  const [css, theme] = useStyletron();

  return (
    <div className={css({ maxWidth: '800px', margin: 'auto' })}>
      <h2 className={css({
        padding:'2px',
      })}>Tell us about your Education</h2>

      <form className={css({
        backgroundColor: '#f7f7f7',
        paddingTop: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
      })}>

        <div className={css({
          display: 'flex',
          flexDirection: 'column', 
          marginBottom: theme.sizing.scale300,
        })}>
          <label className={css({
            marginBottom: theme.sizing.scale200,
            display: 'block',
            color: theme.colors.primary,
          })}>School Name</label>
          <Input
            placeholder="School Name"
            overrides={{ Input: { style: { borderRadius: '4px', border: '1px solid #ddd' } } }}
          />
        </div>

        <div className={css({
          display: 'flex',
          flexDirection: 'column', 
          marginBottom: theme.sizing.scale300,
        })}>
          <label className={css({
            marginBottom: theme.sizing.scale200,
            display: 'block',
            color: theme.colors.primary,
          })}>School Location</label>
          <Input
            placeholder="School Location"
            overrides={{ Input: { style: { borderRadius: '4px', border: '1px solid #ddd' } } }}
          />
        </div>

        <div className={css({
          display: 'flex',
          flexDirection: 'column',
          marginBottom: theme.sizing.scale300,
        })}>
          <label className={css({
            marginBottom: theme.sizing.scale200,
            display: 'block',
            color: theme.colors.primary,
          })}>Degree</label>
          <Input
            placeholder="Degree"
            overrides={{ Input: { style: { borderRadius: '4px', border: '1px solid #ddd' } } }}
          />
        </div>

        <div className={css({
          display: 'flex',
          flexDirection: 'column',
          marginBottom: theme.sizing.scale300,
        })}>
          <label className={css({
            marginBottom: theme.sizing.scale200,
            display: 'block',
            color: theme.colors.primary,
          })}>Field of Study</label>
          <Input
            placeholder="Field of Study "
            overrides={{ Input: { style: { borderRadius: '4px', border: '1px solid #ddd' } } }}
          />
        </div>

        <div className={css({
          display: 'flex',
          flexDirection: 'row',
          marginBottom: theme.sizing.scale300,
        })}>
          <div className={css({
            marginRight: theme.sizing.scale300,
            flex: 1,
          })}>
            <label className={css({
              marginBottom: theme.sizing.scale200,
              display: 'block',
              color: theme.colors.primary,
            })}>Graduation Start Date</label>
            <Input
              placeholder="Graduation Start Date"
              type="date"
              overrides={{ Input: { style: { borderRadius: '4px', border: '1px solid #ddd' } } }}
            />
          </div>

          <div className={css({
            flex: 1,
          })}>
            <label className={css({
              marginBottom: theme.sizing.scale200,
              display: 'block',
              color: theme.colors.primary,
            })}>Graduation End Date</label>
            <Input
              placeholder="Graduation End Date"
              type="date"
              overrides={{ Input: { style: { borderRadius: '4px', border: '1px solid #ddd' } } }}
            />
          </div>
        </div>

      </form>
    </div>
  );
};

export default Education;
